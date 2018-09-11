DROP DATABASE amazon;
CREATE DATABASE amazon;
USE amazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  seller_name VARCHAR(150),
  ratings_average FLOAT,
  ratings_count INT,
  questions_count INT,
  amazons_choice INT,
  category_name VARCHAR(255),
  price FLOAT,
  price_list FLOAT,
  free_returns BOOLEAN,
  free_shipping BOOLEAN,
  sold_by_name VARCHAR(150),
  available INT,
  has_countdown INT,
  description TEXT,
  used_count INT,
  used_price INT
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  image_url VARCHAR(255),
  var_key VARCHAR(150),
  var_value VARCHAR(150)
);
