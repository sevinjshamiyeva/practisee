const mongoose = require('mongoose')
const ProductSchema=mongoose.Schema({
    name:{type:String},
    count:{type:Number},
    price:{type:Number}
},{
    timestamps:true
}
)
const Product=mongoose.model("product",ProductSchema)
module.exports=Product