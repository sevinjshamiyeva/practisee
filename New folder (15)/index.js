const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./src/config/db");
// require("./src/config/db");
dbConnect();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const productRouter = require("./src/routers/productRouters.js");

const port = process.env.PORT || 3000;

app.use("/", productRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
