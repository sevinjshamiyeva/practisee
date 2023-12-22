const express = require("express")
const router = express.Router()

const producRouter=require("./product.js")
router.use("/product",producRouter)

module.exports=router