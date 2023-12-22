const express = require("express")
const router = express.Router()
const Products=require("../models/productModels")

// post 
router.post("/",async(req,res)=>{
    const postProduct=req.body
    const newProduct=new Products(postProduct)
    await newProduct.save()
    res.send(newProduct)
    
})
// get all products
router.get("/",async(req,res)=>{
    const allProduct=await Products.find()
    res.send(allProduct)
})
// get by id
router.get("/:id",async(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    const productId=await Products.findById(id)
    res.send(productId)
})
// delete
router.delete("/:id",async(req,res)=>{
    const Id=req.params.id
    const deleteId=await Products.findByIdAndDelete(Id)
    res.send(deleteId)
})
//put
router.put("/:id",async(req,res)=>{
    const ID=req.params.id
    const elem=req.body
    const updated=await Products.replaceOne({ _id: ID },elem)
   res.send(updated)
})
// patch
router.patch("/:id",async(req,res)=>{
    const ID=req.params.id
    const elems=req.body
    const update=await Products.findOneAndUpdate({ _id: ID },elems,{new:true})
   res.send(update)
})

module.exports = router