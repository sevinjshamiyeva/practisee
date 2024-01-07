const express = require("express")
const router = express.Router()
const Product=require("../models/productModel")


//post
router.post('/', async(req, res) => {
    try {
        const postProd=req.body
        const newProd=new Product(postProd)
        await newProd.save()
        res.status(200).json(newProd)
    } catch (error) {
        res.status(500).json(err)
    }
   
  })
  //get all prod
  router.get('/', async(req, res) => {
    try {
        const allProd=await Product.find()
        res.status(200).json(allProd)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
  //get by id
  router.get('/:id', async(req, res) => {
    try {
       const id=req.params.id
       const byId= await Product.findById(id)
        res.status(200).json(byId)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
  //delete
  router.delete('/:id', async(req, res) => {
    try {
       const id=req.params.id
       const byId= await Product.findByIdAndDelete(id)
        res.status(200).json(byId)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
  //put
router.put("/:id",async(req,res)=>{
  const id=req.params.id
  const elem=req.body
  const update=await Product.replaceOne({_id:id},elem)
  res.send(update)})
//patch
router.patch("/:id",async(req,res)=>{
  const id=req.params.id
  const elem=req.body
  const update=await Product.findOneAndUpdate({_id:id},elem,{new:true})
  res.send(update)})

module.exports = router