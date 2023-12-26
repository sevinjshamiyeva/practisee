const express = require("express")
const router = express.Router()
const Users=require("../models/usersModel")

// post
router.post("/",async(req,res)=>{
    const postUser=req.body
    let findUser= await Users.findOne({email:postUser.email})

    if(findUser){
       return res.status(201).send("element var")
    }else{
        const newUser=new Users(postUser)
        await newUser.save()
        res.send(newUser)
    }
    
})
//get all users
router.get("/",async(req,res)=>{
    const allUsers=await Users.find()
    res.send(allUsers)
})
//get by id
router.get("/:id",async(req,res)=>{
    const id=req.params.id
    const oneUser=await Users.findById(id)
    res.send(oneUser)
})
//delete 
router.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const oneUser=await Users.findByIdAndDelete(id)
    res.send(oneUser)})
//put
router.put("/:id",async(req,res)=>{
    const id=req.params.id
    const elem=req.body
    const update=await Users.replaceOne({_id:id},elem)
    res.send(update)})
//patch
router.patch("/:id",async(req,res)=>{
    const id=req.params.id
    const elem=req.body
    const update=await Users.findOneAndUpdate({_id:id},elem,{new:true})
    res.send(update)})
module.exports = router