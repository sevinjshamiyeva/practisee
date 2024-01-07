const express = require("express")
const Users = require("../models/usersModel")
const router = express.Router()
const { Types } = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



//post
router.post('/', async(req, res) => {
    try {
        const postProd=req.body
        const newProd=new Users(postProd)
        await newProd.save()
        res.status(200).json(newProd)
    } catch (error) {
        res.status(500).json(err)
    }
  })
  //get all prod
  router.get('/', async(req, res) => {
    try {
        const allUsers=await Users.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
  //get by id
  router.get('/:id', async(req, res) => {
    try {
       const id=req.params.id
       const byId= await Users.findById(id)
        res.status(200).json(byId)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
  //delete
  router.delete('/:id', async(req, res) => {
    try {
       const id=req.params.id
       const byId= await Users.findByIdAndDelete(id)
        res.status(200).json(byId)
    } catch (error) {
        res.status(500).json(error)
        
    }
  })
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

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı e-posta adresine göre bul
    const user = await Users.findOne({ email });

    // Kullanıcı varsa şifreyi kontrol et
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Şifre doğru, JWT token oluştur
        const token = jwt.sign({ userId: user._id, email: user.email }, "your_secret_key", { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




module.exports = router