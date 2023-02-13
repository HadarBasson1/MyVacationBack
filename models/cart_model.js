const mongoose = require("mongoose");

// User Modal Schema
const CartSchema = new mongoose.Schema({
  Emailuser: {
    type: String,
  },
  CartItems: { type: Object },
  Total: { type: Number },
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = { Cart };
