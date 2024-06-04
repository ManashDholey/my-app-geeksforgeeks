const {getData} = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.route("/get-data").get(getData);

module.exports = router;