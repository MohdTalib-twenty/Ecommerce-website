const express = require("express");
const { getProducts, getProduct } = require("../controller/watchController");

const router = express.Router();

router.route("/wproducts").get(getProducts);

router.route("/wproducts/:id").get(getProduct);

module.exports = router;
