const express = require("express");
const { getProducts, getProduct } = require("../controller/allwatchController");

const router = express.Router();

router.route("/allwatch").get(getProducts);

router.route("/allwatch/:id").get(getProduct);

module.exports = router;
