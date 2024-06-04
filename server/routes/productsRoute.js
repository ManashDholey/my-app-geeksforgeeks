const {getProductData,updateProductData} = require("../controllers/productsController");

const express = require("express");
const router = express.Router();

router.route("/get-products-data").get(getProductData);
router.route("/update-products-data/:id").put(updateProductData);
module.exports = router;