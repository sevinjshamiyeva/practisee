const express = require("express");
const router = express.Router();

const ProductRouters = require("./products");
router.use("/products", ProductRouters);

module.exports = router;
