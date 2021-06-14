const express = require("express");
const { getProducts, getProduct } = require("../controller/tshirtController");

const router = express.Router();

router.route("/tproducts").get(getProducts);

router.route("/tproducts/:id").get(getProduct);

module.exports = router;
