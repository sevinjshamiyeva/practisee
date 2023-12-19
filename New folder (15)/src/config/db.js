const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("connected mongoDB");
};

module.exports = dbConnect;
