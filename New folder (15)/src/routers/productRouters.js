const router = require("express").Router();
const productControllers = require("../controllers/productControllers");
const Product = require("../models/productModels");

router.get("/products", productControllers.getAllUser);

module.exports = router;
