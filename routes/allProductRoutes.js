const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controller/allCProductController");

const router = express.Router();

router.route("/allproducts").get(getProducts);

router.route("/allproducts/:id").get(getProduct);

module.exports = router;
