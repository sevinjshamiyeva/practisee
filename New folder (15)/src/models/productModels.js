const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
  },
  { collection: "Products", timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
