const { User } = require("../models/user_model");

const allUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

module.exports = {
  allUsers,
};
