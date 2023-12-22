const express = require('express')
const app = express()
const port =process.env.PORT || 3000
const mongoose = require('mongoose');
const mainRouter=require("./routers/index.js")
const bodyParser = require('body-parser')
app.use(bodyParser.json());
require('dotenv').config();


const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect")
    } catch (error) {
        console.log("error")
    }
}

// app.get('/', (req, res) => {
//   res.send('Hello Worlds!')
// })
app.use("/api",mainRouter)
app.listen(port, () => {
    connect()
  console.log(`Example app listening on port ${port}`)
})