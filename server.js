const express = require("express");
const app = express();
const db = require("./database/db.js");

app.use("/", express.static(__dirname + "/client"));

app.get("/get", (req, res) => {
  if (req.query.id === undefined) {
    db.getAllProducts(data => {
      res.send(data);
    });
  } else {
    db.getProduct(req.query.id, data => {
      res.send(data);
    });
  }
});

app.listen("9000", () => {
  console.log("listening on 9000");
});
