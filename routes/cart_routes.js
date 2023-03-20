const express = require("express");
const router = express.Router();
const Cart = require("../controllers/carts");

router.post("/addToCart", Cart.addToCart);
router.post("/creatCart", Cart.creatCart);
module.exports = router;
