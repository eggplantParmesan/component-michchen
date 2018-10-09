const generate = require('./generateData');
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'richtest',
  port: 5432,
})
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })




 // host: process.env.DB_HOST,
 //  user: process.env.DB_USER,
 //  password: process.env.DB_PASS,
 //  database: 'hramazon',
  // port: 9001

// const con = mysql.createConnection({
//   host: 'hramazon.cwakgm40gffr.us-west-1.rds.amazonaws.com',
//   user: 'pikapoo',
//   password: '123password',
//   database: 'hramazon',
//   // port: 3306
// });


// client.connect((err) => {
//   // console.log('con.connect--------------------------------');
//   if (err) {
//     console.log('db.js > connection error', err);
//   } else {
//     console.log('connection success!');
//   }
// });

// for creating fake data (faker.js)
exports.resetTable = (table, cb) => {
  client.query(`DELETE FROM ${table};`, () => {
    console.log(`DELETED TABLE ${table}`);
    client.query(`ALTER TABLE ${table} AUTO_INCREMENT=1;`, () => {
      console.log(`RESET AUTO_INCREMENT for ${table}`);
      cb();
    });
  });
};

exports.insertRow = (query, cb) => {
  client.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      cb(res, con);
    }
  });
};

exports.getProduct = (id, whenGotten) => {
  // console.log('exports.getProduct');
  // console.log(`SELECT * FROM products WHERE id=${id}`);

  client.query(`SELECT * FROM products WHERE id=${id}`, (error, result) => {
    // console.log('selected sucessfully from products');
    // console.log(result);
    if (error) {
      console.log(error);
    } else {
    whenGotten(null, result);
    }
  //   const productObj = result[0];
  //   con.query(`SELECT * FROM images WHERE productId=${id}`, (error, res) => {
  //     const imgArr = {};
  //     for (let i = 0; i < res.length; i += 1) {
  //       // init category object if does not exist
  //       if (imgArr[res[i].varKey] === undefined) {
  //         imgArr[res[i].varKey] = {};
  //       }

  //       // init category object's value arr if does not exist
  //       if (imgArr[res[i].varKey][res[i].varValue] === undefined) {
  //         imgArr[res[i].varKey][res[i].varValue] = [];
  //       }

  //       // add image url to array
  //       imgArr[res[i].varKey][res[i].varValue].push(res[i].imageUrl);
  //     }

  //     if (productObj) {
  //       productObj.images = imgArr;
  //     }
        // cb(productObj);
  //   });
  // });
  });
};

exports.deleteProduct = ((id, whenDeleted) => {
  client.query(`DELETE FROM products WHERE id=${id}`, (error, result, fields) => {
    if (error) {
      console.log(error);
    } else {
    whenDeleted();
    console.log('DELETED sucessfully from products');
    }
  });  
});

exports.addProduct = (whenAdded) => {
  var thisProduct = generate.generateObject();
  // console.log(thisProduct);
  client.query(`insert into products(id, productName, sellerName, ratingsAverage,ratingsCount,questionsCount,amazonsChoice,categoryName,price,priceList,freeReturns,freeShipping,soldByName,available,hasCountdown,description,usedCount,usedPrice) values( 10000031, 'Egg 10000002', 'Barton, Daugherty and Mayert', 4.2, 256, 18, 1, 'Jewelery-Health-Jewelery-Electronics', 2031, 1868.52, true, true, 'Balistreri and Sons', 0, 0, 'Eligendi soluta ipsum distinctio vero est cumque amet autem.\nEst rerum animi aut nam eaque.\nQui rem earum vero qui.\nQuo placeat incidunt velit accusamus laboriosam excepturi molestias.', 1, 1009)`, (error, result) => {
    if (error) {
      whenAdded(error);
    } else {
    whenAdded(null, result);
    // console.log('ADDED sucessfully to products');
    }
  });  
};


exports.updateProduct = (id, whenUpdated) => {
  var thisProduct = generate.generateObject();
  console.log(thisProduct);
  var thisProductArray = thisProduct.split(',');
  thisProductArray[0] = id;
  client.query
  (`UPDATE products
  SET productName=${thisProductArray[1]}, sellerName=${thisProductArray[2]}, ratingsAverage=${thisProductArray[3]},ratingsCount=${thisProductArray[4]}, questionsCount=${thisProductArray[5]},amazonsChoice=${thisProductArray[6]},categoryName=${thisProductArray[7]},price=${thisProductArray[8]},priceList=${thisProductArray[9]},freeReturns=${thisProductArray[10]},freeShipping=${thisProductArray[11]},soldByName=${thisProductArray[12]},available=${thisProductArray[13]},hasCountdown=${thisProductArray[14]},description=${thisProductArray[15]},usedCount=${thisProductArray[16]},usedPrice=${thisProductArray[17]}
  WHERE id=${id}`, (error, result) => {  
    if (error) {
      whenUpdated(error);
    } else {
    whenUpdated(null, result);
    console.log('UPDATED sucessfully', result);
    }
  });  
};






