const express = require("express");
const router = express.Router();
const Products = require("../models/productsModel");

router.post("/", async (req, res) => {
  const postElem = req.body;
  const newProducts = new Products(postElem);
  await newProducts.save();
  res.send(newProducts);
});

router.get("/", async (req, res) => {
  const allProducts = await Products.find();
  res.send(allProducts);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const OneProducts = await Products.findById(id);
  res.send(OneProducts);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const DeleteProducts = await Products.findByIdAndDelete(id);
  res.send(DeleteProducts);
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const elem = req.body;
  const updateProducts = await Products.OneReplace({ _id: id, elem });
  res.send(updateProducts);
});

module.exports = router;
