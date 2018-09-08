const mysql = require("mysql");

var con = mysql.createConnection({
  url: "localhost",
  user: "root",
  password: "",
  database: "amazon"
});

con.connect(err => {
  if (err) {
    console.log("db.js > connection error");
  }
});

const insertProduct = function(query){
  con.query(query, function(err, res) {
      if(err){
        console.log(err);
      } else {
        console.log(res);
        cb(res);
      }
    }
  );
}

const getProduct = function(id, cb) {
  con.query(`SELECT * FROM products WHERE id=${id}`, function(err, res) {
    cb(res);
  });
};

const getVariations = function(id, cb) {
  con.query(
    `SELECT product_id, image_url, var_key, var_value, is_priority FROM variations WHERE product_id=${id}`,
    function(err, res) {
      if(err){
        console.log(err);
      } else {
        cb(res);
      }
    }
  );
};

// module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.getVariations = getVariations;
module.exports.insertProduct = insertProduct;
