const express = require("express");
const { getProducts, getProduct } = require("../controller/featuredController");

const router = express.Router();

router.route("/fproducts").get(getProducts);

router.route("/fproducts/:id").get(getProduct);

module.exports = router;
