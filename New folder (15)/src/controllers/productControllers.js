const Product = require("../models/productModels");
const getAllProduct = async (req, res) => {
  let allProduct = await Product.find({});
  console.log(allProduct);
  res.send(allProduct);
};

module.exports = { getAllProduct };
