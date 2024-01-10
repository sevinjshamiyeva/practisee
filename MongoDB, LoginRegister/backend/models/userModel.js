const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    username:{ type:String, required:true},
    password:{ type:String, required:true},
    email:{ type:String}
},
{
    timestamps:true
}
)
const Users=mongoose.model("users",UserSchema)
module.exports=Users

