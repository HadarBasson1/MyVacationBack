const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seed = require("./seed");
mongoose.set("strictQuery", false);
const { User } = require("./models/user_model");
const { Cart } = require("./models/cart_model");
const { Order } = require("./models/order_model");

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

const cartRouter = require("./routes/cart_routes");
app.use("/cart", cartRouter);

const userRouter = require("./routes/user_routes");
app.use("/user", userRouter);

const orderRouter = require("./routes/order_routes");
app.use("/order", orderRouter);

app.post("/signup", async (req, res) => {
  var user = req.body.user;
  var email = user.user.email;
  await User.create({ user: user, total: 0 });
  const cart = await Cart.create({
    Emailuser: email,
    CartItems: null,
    Total: 0,
  });
  res.json({ id: cart._id });
});

app.post("/logout", async (req, res) => {
  var cartId = req.body.cartId;
  var cartItems = req.body.cartItems;
  var total = req.body.total;
  await Cart.findByIdAndUpdate(cartId, { CartItems: cartItems, Total: total });
  res.json({ status: 200 });
});

app.post("/login", async (req, res) => {
  var email = req.body.email;
  carts = await Cart.find({});
  for (var i = 0; i < carts.length; i++) {
    if (carts[i].Emailuser === email) {
      res.send({
        id: carts[i]._id,
        cart: carts[i].CartItems,
        total: carts[i].Total,
      });
      return;
    }
  }
});

app.post("/updateSales", async (req, res) => {
  var sales = req.body.sales;
  var email = req.body.email;
  var total = req.body.total;

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

  const users = await User.find({});

  for (var j = 0; j < users.length; j++) {
    if (users[j].user.user.email === email) {
      await User.findByIdAndUpdate(users[j]._id, {
        total: parseInt(users[j].total) + parseInt(total),
      });
    }
  }

  app.get("/allSales", async (req, res) => {
    res.json(Sales_by_continent);
    // res.json({ status: 200 });
  });

  // console.log(JSON.stringify(sales));
  console.log(Sales_by_continent);
  res.json({ status: 200 });
});
