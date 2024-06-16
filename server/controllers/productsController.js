const data = require("../models/data");

exports.getProductData = async (req, res, next) => {
     let search = req.query.search;
     let data1 =[];
     if(search){
      data1 = data.items.filter(e => e.title.includes(search));
     }
     if(!search)
      data1 = data1.length == 0 ? data.items : data1;
    // console.log("data=>",data1);
    return res.status(200).json({
      success: true,
      data:data1,
     });
    
  };
  exports.getProductDataByCategory = async (req, res, next) => {
      const filter = `items-${req.params.category}`;
      return  res.status(200).json({
      success: true,
      data:data[filter],
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
    return res.status(200).json({
      success: true,
      data:result,
    });
     
  }