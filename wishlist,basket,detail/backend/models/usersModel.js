const mongoose = require('mongoose')
const UsersSchema=mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    basket:{type:Array,default:[]},
    wishlist:{type:Array,default:[]},
},{
    timestamps:true
}
)
const Users=mongoose.model("users",UsersSchema)
module.exports=Users