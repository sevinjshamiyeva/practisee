const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const multer = require("multer");
const upload = require("./upload");
app.use(express.static("public"));
const path = require("path");
const fs = require("fs");
const { title } = require("process");
const arr = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = upload;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connect");
  } catch (error) {
    console.log("error");
  }
};

app.post("/users", upload.single("file"), (req, res) => {
  // Handle the uploaded file
  res.json({ message: "File uploaded successfully!" });
  const { title } = req.body;
  console.log(req.body);
  const newUser = {
    title: title,
    profile: "req.file.path",
  };
  arr.push(newUser);
  res.send({
    message: "File uploaded successfully!",
    data: {
      title: newUser.title,
      fullPath: `http://localhost:5000/${newUser.profile}`,
    },
  });
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
