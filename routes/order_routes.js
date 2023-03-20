const express = require("express");
const router = express.Router();
const Order = require("../controllers/orders");

router.post("/creatOrder", Order.creatOrder);
router.get("/allOrders", Order.allOrders);
module.exports = router;
