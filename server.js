const express = require("express");
const app = express();
const db = require("./database/db.js");

app.use("/", express.static(__dirname + "/client/dist"));

// app.get('/product/*',(req,res)=>{
//   res.send(req._parsedUrl.pathname)
// })

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

app.get("/var", (req, res) => {
  if (req.query.id !== undefined) {
    db.getVariations(req.query.id, data => {

      for (var i = 0; i < data.length; i++) {
        // add "color"
        if (!res[data[i].var_key]) {
          res[data[i].var_key] = {}
        }

        if (!res[data[i].var_key].var_value) {

        }

        data[i].image_url
        data[i].var_key
        data[i].var_value
        data[i].is_priority
      }
      res.send(data);
    });
  }
});

app.listen("9001", () => {
  console.log("listening on 9001");
});
