const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seed = require("./seed");
mongoose.set("strictQuery", false);
const { User } = require("./models/user_model");
const { Cart } = require("./models/cart_model");

var http = require("http"),
  server = http.createServer(app),
  io = require("socket.io")(server);
server.listen(8000, () => {
  console.log("APP IS LISTENING ON PORT 8000!");
});

// Asia,Africa,North America,South America,Europe,Australia"
var Sales_by_continent = [0, 0, 0, 0, 0, 0];
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

app.post("/signup", async (req, res) => {
  var user = req.body.user;
  var email = user.user.email;
  await User.create({ user: user });
  const data = await Cart.create({ Emailuser: email, Items: [] });
  res.json({ data: data });
});

app.post("/updateSales", async (req, res) => {
  var sales = req.body;
  for (var i = 0; i < sales.length; i++) {
    switch (sales[i].continent) {
      case "Asia":
        Sales_by_continent[0] += parseInt(sales[i].q);
        break;
      case "Africa":
        Sales_by_continent[1] += parseInt(sales[i].q);
        break;
      case "North America":
        Sales_by_continent[2] += parseInt(sales[i].q);
        break;
      case "South America":
        Sales_by_continent[3] += parseInt(sales[i].q);
        break;
      case "Europe":
        Sales_by_continent[4] += parseInt(sales[i].q);
        break;
      case "Australia":
        Sales_by_continent[5] += parseInt(sales[i].q);
        break;

      default:
        break;
    }
  }
  // console.log(JSON.stringify(sales));
  console.log(Sales_by_continent);
  res.json({ status: 200 });
});

app.get("/allUsers", async (req, res) => {
  const users = await User.find({});
  res.json(users);
  // res.json({ status: 200 });
});

app.get("/allSales", async (req, res) => {
  res.json(Sales_by_continent);
  // res.json({ status: 200 });
});

app.post("/addToCart", async (req, res) => {
  var cartId = req.body.cartId;
  var itemId = req.body.itemId;

  const cart = await Cart.findById(cartId);
  var items = cart.Items;
  var bool = true;

  for (var i = 0; i < items.length; i++) {
    if (items[i].itemId == itemId) {
      items[i].amount += 1;
      bool = false;
    }
  }
  if (bool) {
    items.push({ itemId: itemId, amount: 1 });
  }
  await Cart.findByIdAndUpdate(cartId, { Items: items });
  res.json({ status: 200 });
});

app.post("/creatCart", async (req, res) => {
  var Emailuser = req.body.Emailuser;
  var id = await Cart.create({ Emailuser: Emailuser, Items: [] });
  res.json({ id: id });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port:` + PORT);
// });
