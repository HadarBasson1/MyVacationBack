const express = require("express");
const router = express.Router();
const User = require("../controllers/users");

router.get("/allUsers", User.allUsers);
module.exports = router;
