const express = require("express")
const router = express.Router()
const Users=require("../models/userModel")


// router.post('/', async (req, res) => {
//     const postUser=req.body
//     const newUser=new Users(postUser)
//     await newUser.save()
//     res.send(newUser)
//   })
router.post('/', async (req, res) => {
    const findUser= await Users.findOne({email: req.body.email})
    if(findUser){
      return  res.status(201).send("user var")
    }
        const newUsers = new Users(req.body)
        await newUsers.save()
        res.send(newUsers)
    
  })
  //login
  router.post('/login', async (req, res) => {
    const findUser= await Users.findOne({email: req.body.email,password:req.body.password})
    if(findUser){
      return  res.status(200).send("welcome")
    }else{
        return res.status(201).send("duzgun email daxil edin")
    }
        
    
  })

//allUsers
  router.get('/', async (req, res) => {
    const getAllUsers=await Users.find()
    res.send(getAllUsers)
  })
// get by id
router.get('/:id', async (req, res) => {
  const id=req.params.id
    const OneUsers=await Users.findById(id)
    res.send(OneUsers)
  })
//delete
router.delete('/:id', async (req, res) => {
    const id=req.params.id
      const DeleteUsers=await Users.findByIdAndDelete(id)
      res.send(DeleteUsers)
    })
//put
router.put('/:id', async (req, res) => {
    const id=req.params.id
    const elem=req.body
      const putUsers=await Users.replaceOne({_id:id},elem)
      res.send(putUsers)
    })
//patch
router.patch('/:id', async (req, res) => {
    const id=req.params.id
    const elem=req.body
      const patchUsers=await Users.findByIdAndUpdate({_id:id},elem,{new:true})
      res.send(patchUsers)
    })

module.exports = router