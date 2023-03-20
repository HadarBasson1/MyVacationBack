const { Cart } = require("../models/cart_model");

const addToCart = async (req, res) => {
  var cartId = req.body.cartId;
  var itemId = req.body.itemId;

  const cart = await Cart.findById(cartId);
  var items = cart.Items;
  var bool = true;

  for (var i = 0; i < items.length; i++) {
    if (items[i].itemId == itemId) {
      items[i].amount += 1;
      bool = false;
    }
  }
  if (bool) {
    items.push({ itemId: itemId, amount: 1 });
  }
  await Cart.findByIdAndUpdate(cartId, { Items: items });
  res.json({ status: 200 });
};

const creatCart = async (req, res) => {
  var Emailuser = req.body.Emailuser;
  var id = await Cart.create({ Emailuser: Emailuser, Items: [] });
  res.json({ id: id });
};

module.exports = {
  addToCart,
  creatCart,
};
