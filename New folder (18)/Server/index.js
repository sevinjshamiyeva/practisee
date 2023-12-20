const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let arr = [
  {
    id: 1,
    name: "Steve Lacy",
    age: 24,
    img: "https://www.rollingstone.com/wp-content/uploads/2023/08/Steve-Lacy-Reflects-on-Smashing-Fans-Camera.jpg?w=1581&h=1054&crop=1",
  },
  {
    id: 2,
    name: "The Weeknd",
    age: 21,
    img: "https://static.wikia.nocookie.net/singmovie/images/b/b5/The-Weeknd.jpg/revision/latest?cb=20220808010527",
  },
  {
    id: 3,
    name: "The Weeknd",
    age: 20,
    img: "https://imageio.forbes.com/specials-images/imageserve/5ed564163dbc9800060b2829/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds",
  },
];

// app.get("/users", (req, res) => {
//   res.send(arr);
// });
app.post("/users", (req, res) => {
  res.send(arr.push(req.body));
});
app.delete("/users/:id", (req, res) => {
  const Id = req.params.id;
  arr = arr.filter((elem) => elem.id != Id);
  res.send(arr);
});
app.get("/users", (req, res) => {
  let filterData = arr;
  if (req.query.name) {
    filterData = filterData.filter((elem) =>
      elem.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
    res.send(filterData);
  } else {
    res.send(arr);
    console.log("not");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
