const { Order } = require("../models/order_model");

const allOrders = async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
};

const creatOrder = async (req, res) => {
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Address = req.body.Address;
  var Phone = req.body.Phone;
  var Total = req.body.Total;
  var Date_Order = new Date();
  var id = await Order.create({
    FirstName: FirstName,
    LastName: LastName,
    Address: Address,
    Phone: Phone,
    Total: Total,
    Date: Date_Order,
  });
  res.json({ id: id });
};

module.exports = {
  allOrders,
  creatOrder,
};
