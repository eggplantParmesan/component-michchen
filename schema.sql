DROP DATABASE IF EXISTS amazon;
CREATE DATABASE amazon;
USE amazon;

-- CREATE TABLE products(
--   id INT, 
--   productName VARCHAR(150), 
--   sellerName VARCHAR(150), 
--   ratingsAverage FLOAT,
--   ratingsCount INT,
--   questionsCount INT,
--   amazonsChoice INT,
--   categoryName VARCHAR(255),
--   price FLOAT,
--   priceList FLOAT,
--   freeReturns BOOLEAN,
--   freeShipping BOOLEAN,
--   soldByName VARCHAR(150),
--   available INT,
--   hasCountdown INT,
--   description TEXT,
--   usedCount INT,
--   usedPrice INT,
--   imageUrl VARCHAR(255),
--   varKey VARCHAR(150),
--   varValue VARCHAR(150)
-- );


 id, productName, sellerName, ratingsAverage, ratingsCount, questionsCount, amazonsChoice, categoryName, price, priceList FLOAT, freeReturns, freeShipping, soldByName, available, hasCountdown, description, usedCount, usedPrice, imageUrl, varKey, varValue

CREATE TABLE products(
  id INT, 
  productName VARCHAR, 
  sellerName VARCHAR, 
  ratingsAverage FLOAT,
  ratingsCount INT,
  questionsCount INT,
  amazonsChoice INT,
  categoryName VARCHAR,
  price FLOAT,
  priceList FLOAT,
  freeReturns BOOLEAN,
  freeShipping BOOLEAN,
  soldByName VARCHAR,
  available INT,
  hasCountdown INT,
  description TEXT,
  usedCount INT,
  usedPrice FLOAT,
  imageUrl VARCHAR,
  varKey VARCHAR,
  varValue VARCHAR,
  PRIMARY KEY(id, productName)
);

(id, productName, sellerName, ratingsAverage,ratingsCount,questionsCount,amazonsChoice,categoryName,price,priceList,freeReturns,freeShipping,soldByName,available,hasCountdown,description,usedCount,usedPrice,imageUrl,varKey,varValue)

COPY eggplants.products (id, productName, sellerName, ratingsAverage,ratingsCount,questionsCount,amazonsChoice,categoryName,price,priceList,freeReturns,freeShipping,soldByName,available,hasCountdown,description,usedCount,usedPrice,imageUrl,varKey,varValue) from '/Users/i/hackreactor/item-listing-component-rich/database/bigFile.csv' WITH DELIMITER = '|' AND HEADER=FALSE;
-- CREATE TABLE products(
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   productName VARCHAR(150),
--   sellerName VARCHAR(150),
--   ratingsAverage FLOAT,
--   ratingsCount INT,
--   questionsCount INT,
--   amazonsChoice INT,
--   categoryName VARCHAR(255),
--   price FLOAT,
--   priceList FLOAT,
--   freeReturns BOOLEAN,
--   freeShipping BOOLEAN,
--   soldByName VARCHAR(150),
--   available INT,
--   hasCountdown INT,
--   description TEXT,
--   usedCount INT,
--   usedPrice INT
-- );

-- CREATE TABLE images (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   productId INT,
--   imageUrl VARCHAR(255),
--   varKey VARCHAR(150),
--   varValue VARCHAR(150)
-- );

cassandra-loader -f /Users/i/hackreactor/item-listing-component-rich/database/bigFile.csv -host localhost -schema "eggplants.products(id, productName, sellerName, ratingsAverage,ratingsCount,questionsCount,amazonsChoice,categoryName,price,priceList,freeReturns,freeShipping,soldByName,available,hasCountdown,description,usedCount,usedPrice,imageUrl,varKey,varValue)"


 cassandra-loader -f /Users/i/hackreactor/item-listing-component-rich/database/bigFile.csv -host 127.0.0.1:9042 -schema "eggplants.products(id, productName, sellerName, ratingsAverage,ratingsCount,questionsCount,amazonsChoice,categoryName,price,priceList,freeReturns,freeShipping,soldByName,available,hasCountdown,description,usedCount,usedPrice,imageUrl,varKey,varValue)"
