const express = require("express")
const router = express.Router()


const ProductRouters=require("./product.js")
const UsersRouters=require("./users.js")
router.use("/product",ProductRouters)
router.use("/users",UsersRouters)


module.exports = router