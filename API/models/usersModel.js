const mongoose = require('mongoose')
const UserSchema=mongoose.Schema({
    username:{type:String},
    surname:{type:String},
    email:{type:String},
    password:{type:String},
    isPublic:{type:Boolean},
    posts:[{id:{type:String},img:{type:String},title:{type:String}}],
    follower:{type:Array,default:[]},
    following:{type:Array,default:[]},
    blockList:{type:Array,default:[]},
    stories:{type:Array,default:[]},
    notifications:{type:Array,default:[]},
    bio:{
        info:{type:String},
        country:{type:String}
    },
    role:{type:String,default:"user",enum:["user","admin"]}
},{
    timestamps:true
})

const Users=mongoose.model("users",UserSchema)
module.exports=Users