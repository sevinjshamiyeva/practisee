const mongoose = require("mongoose")

const ProductSchema=mongoose.Schema({
    name:{type:String,required:true},
    count:{type:Number,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true}
},{
    timestamps:true
})

const Products=mongoose.model("product",ProductSchema)
module.exports=Products