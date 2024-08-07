const data = require("../models/data");

exports.getProductData = async (req, res, next) => {
    res.status(200).json({
      success: true,
      data:data.items,
    });
  };

  exports.updateProductData = async (req,res,next) =>{
    const { id } = req.params;
    const result = data.items.map((item,index) =>{
          if(id == index){
            item.title = req.body.title
          }
          return item;
    });
    data.items = result;
    res.status(200).json({
      success: true,
      data:result,
    });
     
  }