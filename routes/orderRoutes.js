const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authenticate");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getmyOrders,
} = require("../controller/orderController");
router.route("/myorders").get(protect, getmyOrders);
router.route("/").post(protect, addOrderItem);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
