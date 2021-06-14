const express = require("express");
const { getProducts, getProduct } = require("../controller/shoesProduct");

const router = express.Router();

router.route("/sproducts").get(getProducts);

router.route("/sproducts/:id").get(getProduct);

module.exports = router;
