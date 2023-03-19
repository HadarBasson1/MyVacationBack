const mongoose = require("mongoose");

// Order Modal Schema
const orderSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Address: {
    type: String,
  },
  Phone: {
    type: String,
  },
  Total: {
    type: Number,
  },
  Date: {
    type: Date,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };
