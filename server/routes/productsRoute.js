const {getProductData,updateProductData,getProductDataByCategory} = require("../controllers/productsController");

const express = require("express");
const router = express.Router();

router.route("/get-products-data").get(getProductData);
router.route("/get-products-data-by-category/:category").get(getProductDataByCategory);
router.route("/update-products-data/:id").put(updateProductData);
module.exports = router;