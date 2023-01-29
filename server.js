const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seed = require("./seed");
mongoose.set("strictQuery", false);
const { User } = require("./models/user_model");

var http = require("http"),
  server = http.createServer(app),
  io = require("socket.io")(server);
server.listen(8000, () => {
  console.log("APP IS LISTENING ON PORT 8000!");
});

let usersConnected = 0;

io.on("connection", (socket) => {
  console.log("user connected");
  usersConnected += 1;
  io.emit("users", `${usersConnected}`);

  socket.on("disconnect", () => {
    console.log("user disconnect");
    usersConnected -= 1;
    io.emit("users", `${usersConnected}`);
  });

  socket.on("message", (message) => {
    console.log(message);
  });
});

const bodyParser = require("body-parser");
seed.seedDB();
if (process.env.NODE_ENV == "development") {
  const swaggerUI = require("swagger-ui-express");
  const swaggerJsDoc = require("swagger-jsdoc");
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Web_2_Project_API",
        version: "1.0.0",
        description: "A simple Express Library API!",
      },
      servers: [{ url: "http://localhost:" + process.env.PORT }],
    },
    apis: ["./routes/*.js"],
  };
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
}

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "1m" }));
app.use(bodyParser.json());
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("db connected!");
});
const PORT = process.env.PORT;
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const flightRouter = require("./routes/flight_routes");
app.use("/flight", flightRouter);

app.post("/addUid", async (req, res) => {
  var user = req.body.user;
  await User.create({ user: user });
  res.json({ status: 200 });
});

app.get("/allUsers", async (req, res) => {
  const users = await User.find({});
  res.json(users);
  // res.json({ status: 200 });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port:` + PORT);
// });
