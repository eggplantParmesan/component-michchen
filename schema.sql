CREATE DATABASE amazon;
USE amazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  product_url VARCHAR(255),
  seller_name VARCHAR(150),
  seller_url VARCHAR(255),
  average_rating FLOAT,
  num_ratings INT,
  num_questions INT,
  category VARCHAR(50),
  category_link VARCHAR(255),
  price FLOAT,
  list_price FLOAT,
  size TEXT,
  free_returns BOOLEAN,
  free_shipping BOOLEAN,
  on_sale BOOLEAN,
  sold_by VARCHAR(150),
  sold_by_url VARCHAR(255),
  available BOOLEAN,
  description TEXT,
  num_used INT,
  used_price INT,
  images TEXT
);
