const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const db = require('./database/db.js');


var corsOptions = {
  origin: 'http://localhost:9002',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
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
