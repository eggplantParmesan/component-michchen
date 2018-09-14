const mysql = require('mysql');

var con = mysql.createConnection({
  url: 'localhost',
  user: 'root',
  // port: 9001,
  password: '',
  database: 'amazon'
});

con.connect(err => {
  console.log('con.connect--------------------------------')
  if (err) {
    console.log('db.js > connection error', err);
  } else {
    console.log('connection success!');
  }
});

// for creating fake data (faker.js)
exports.resetTable = function(table, cb){
  con.query(`DELETE FROM ${table};`, (err,res) => {
    console.log(`DELETED TABLE ${table}`);
    con.query(`ALTER TABLE ${table} AUTO_INCREMENT=1;`, (err,res) => {
      console.log(`RESET AUTO_INCREMENT for ${table}`);
      cb();
    })
  })
}

exports.insertRow = function(query, cb){
  con.query(query, function(err, res) {
      if(err){
        console.log(err);
      } else {
        cb(res, con);
      }
    }
  );
}

exports.getProduct = function(id, cb) {

  console.log('exports.getProduct');
  console.log(`SELECT * FROM products WHERE id=${id}`);

  con.query(`SELECT * FROM products WHERE id=${id}`, function(err, result) {

    console.log('selected sucessfully from products');

    let productObj = result[0];
    con.query(`SELECT * FROM images WHERE productId=${id}`, function(err, res) {
      let img_arr = {};
      for (var i = 0; i < res.length; i++) {
        // init category object if does not exist
        if (img_arr[res[i].varKey] === undefined){
          img_arr[res[i].varKey] = {};
        }

        // init category object's value arr if does not exist
        if (img_arr[res[i].varKey][res[i].varValue] === undefined){
          img_arr[res[i].varKey][res[i].varValue] = [];
        }

        // add image url to array
        img_arr[res[i].varKey][res[i].varValue].push(res[i].imageUrl);
      }

      if (productObj) {productObj.images = img_arr;}
      cb(productObj)
    });
  });
};
