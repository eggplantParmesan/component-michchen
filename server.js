require('dotenv').config();
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

app.get('/get', (req, res) => {
  // req.query is the URL query string, and 'id' is the product id i wish to fetch
  //req.query.id
  db.getProduct(99, (data) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  });
});

app.get('/test', (req, res) => {
  res.send("HEY YO IT'S ME");
});

app.post('/post', (req, res) => {
  res.send('HEY YO I AM POSTED');
});

app.put('/put', (req, res) => {
  res.send('HEY YO I AM PUTT');
});

app.delete('/delete', (req, res) => {
  db.deleteProduct(99, () => {
  	console.log('DELETED');
  });  
});

app.listen(3306, () => {
  console.log(`listening on ${3306}`);
});
