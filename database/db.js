const mysql = require("mysql");

var con = mysql.createConnection({
  url: "localhost",
  user: "root",
  password: "",
  database: "amazon"
});

con.connect(err => {
  if (err) {
    console.log("error");
  }
});

const getAllProducts = function(cb) {
  con.query("SELECT * FROM products", function(err, res) {
    cb(res);
  });
};

const getProduct = function(id, cb) {
  con.query(`SELECT * FROM products WHERE ID=${id}`, function(err, res) {
    cb(res);
  });
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
