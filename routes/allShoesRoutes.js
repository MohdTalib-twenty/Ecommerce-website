const express = require("express");
const { getProducts, getProduct } = require("../controller/allshoesController");

const router = express.Router();

router.route("/allshoes").get(getProducts);

router.route("/allshoes/:id").get(getProduct);

module.exports = router;
