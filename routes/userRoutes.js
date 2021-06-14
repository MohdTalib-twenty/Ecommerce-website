const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { protect } = require("../middleware/authenticate");
const {
  loginController,
  registerController,
  getUserProfile,
  updateUserProfile,
} = require("../controller/userController");
const { Mongoose } = require("mongoose");

router.post("/signin", loginController);
router.post("/signup", registerController);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
