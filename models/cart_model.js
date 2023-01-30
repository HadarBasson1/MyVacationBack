const mongoose = require("mongoose");

// User Modal Schema
const CartSchema = new mongoose.Schema({
  Emailuser: {
    type: String,
  },
  Items: [
    {
      itemId: {
        type: String,
      },
      amount: {
        type: Number,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = { Cart };
