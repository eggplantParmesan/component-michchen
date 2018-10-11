require('dotenv').config();
require('newrelic');

const morgan = require('morgan');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const db = require('./database/db.js');

const corsOptions = {
  origin: 'http://localhost:3306',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/', express.static(path.join(__dirname, '/client/dist')));
// app.use('/', express.static(__dirname + '/client/dist'));

app.get('/cruddy/:productId', (req, res) => {
  var {productId} = req.params;
  db.getProduct(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const {id, productname, sellername, ratingsaverage, ratingscount, questionscount, amazonschoice, categoryname, price, pricelist, freereturns, freeshipping, soldbyname, available, hascountdown, description, usedcount, usedprice, imageurl, varkey, varvalue} = data.rows[0];
      const categories = categoryname.split('-');
      const values = varvalue.split('-');
      res.header('Access-Control-Allow-Origin', '*');
      let newData = {
        id: id, 
        productName: productname,
        sellerName: sellername,
        ratingsAverage: ratingsaverage,
        ratingsCount: ratingscount,
        questionsCount: questionscount,
        amazonsChoice: amazonschoice,
        categoryName: categories[0],
        price: price,
        priceList: pricelist,
        freeReturns: freereturns,
        freeShipping: freeshipping,
        soldByName: soldbyname,
        available: available,
        hasCountdown: hascountdown,
        description: description,
        usedCount: usedcount,
        usedPrice: usedprice,
        imageUrl: imageurl,
        varKey: varkey,
        varValue: values[0],
      };
      res.send(newData);
    }
  });
});

app.post('/cruddy', (req, res) => {
  db.addProduct ((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(data);
    }
  });
});

app.put('/cruddy/*', (req, res) => {
  var productNumber = req.params[0];
  db.updateProduct (productNumber, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(data);
    }
  });
});

app.delete('/cruddy/*', (req, res) => {
  console.log('delete')
  var productNumber = req.params[0];
  db.deleteProduct(productNumber, () => {
    console.log('DELETED');
    res.send ('YO I AM DELETED YO');
  });
});

app.listen(3306, () => {
  console.log(`listening on ${3306}`);
});
