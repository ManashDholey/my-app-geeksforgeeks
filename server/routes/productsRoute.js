const {getProductData} = require("../controllers/productsController");

const express = require("express");
const router = express.Router();

router.route("/get-products-data").get(getProductData);

module.exports = router;