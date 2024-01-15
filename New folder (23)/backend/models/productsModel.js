const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("products", ProductsSchema);
module.exports = Products;
