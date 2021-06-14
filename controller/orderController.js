const assyncHandler = require("express-async-handler");
const Order = require("../models/order");

const addOrderItem = assyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Found");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user.id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(200).json(createOrder);
  }
});
const getOrderById = assyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});
const updateOrderToPaid = assyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = true),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      });
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});
const getmyOrders = assyncHandler(async (req, res) => {
  //console.log(req.user._id);
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});
module.exports = { addOrderItem, getOrderById, updateOrderToPaid, getmyOrders };
