const express = require('express');
const path = require('path');

const app = express();
const db = require('./database/db.js');


app.use('/', express.static(path.join(__dirname, '/client/dist')));
// app.use('/', express.static(__dirname + '/client/dist'));


app.get('/get', (req, res) => {
  // req.query is the URL query string, and 'id' is the product id i wish to fetch
  db.getProduct(req.query.id, (data) => {
    res.send(data);
  });
});

app.get('/test', (req, res) => {
  res.send('test');
});

app.listen(process.env.PORT || 9001, () => {
  console.log(`listening on ${process.env.PORT || 9001}`);
});
