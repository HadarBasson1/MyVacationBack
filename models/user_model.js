const mongoose = require("mongoose");

// User Modal Schema
const userSchema = new mongoose.Schema({
  user: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
