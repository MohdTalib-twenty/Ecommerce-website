const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controller/alltshirtController");

const router = express.Router();

router.route("/alltshirt").get(getProducts);

router.route("/alltshirt/:id").get(getProduct);

module.exports = router;
