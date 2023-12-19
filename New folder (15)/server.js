const express = require("express");
const app = express();
const port = 3000;
const url = require("./db.json");

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const elemId = url.products.find((elem) => elem.id == id);
  res.send(elemId);
  console.log(elemId);
});
app.get("/products", (req, res) => {
  // if (!req.query.name && !req.query.price) {
  //     res.send(url.products);
  //   } else if (req.query.name) {
  //     res.send(
  //       url.products.filter((elem) =>
  //         elem.name
  //           .toLowerCase()
  //           .includes(req.query.name.toLowerCase(req.query.name))
  //       )
  //     );
  //   } else if (req.query.price) {
  //     res.send(
  //       url.products.filter((elem) =>
  //         elem.name
  //           .toLowerCase()
  //           .includes(req.query.name.toLowerCase(req.query.price))
  //       )
  //     );
  //   }
  let filterData = url.products;
  console.log(req.query.name);
  if (req.query.name) {
    filterData = filterData.filter((elem) =>
      elem.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
  }
  if (req.query.price) {
    filterData = filterData.filter((elem) => elem.price == req.query.price);
  }
  res.send(filterData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
