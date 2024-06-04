const data = require("../models/data");

exports.getData = async (req, res, next) => {
    res.status(200).json({
      success: true,
      data:data.items,
    });
  };