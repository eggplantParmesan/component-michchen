DROP DATABASE amazon;
CREATE DATABASE amazon;
USE amazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  product_url VARCHAR(255),
  seller_name VARCHAR(150),
  seller_url VARCHAR(255),
  ratings_average FLOAT,
  ratings_count INT,
  questions_count INT,
  category_name VARCHAR(50),
  category_url VARCHAR(255),
  price FLOAT,
  price_list_price FLOAT,
  free_returns BOOLEAN,
  free_shipping BOOLEAN,
  sold_by_name VARCHAR(150),
  sold_by_url VARCHAR(255),
  available BOOLEAN,
  description TEXT,
  used_count INT,
  used_price INT,
  variations TEXT
);

INSERT INTO products (
  product_name,
  product_url,
  seller_name,
  seller_url,
  ratings_average,
  ratings_count,
  questions_count,
  category_name,
  category_url,
  price,
  price_list_price,
  free_returns,
  free_shipping,
  sold_by_name,
  sold_by_url,
  available,
  description,
  used_count,
  used_price,
  variations
)


CREATE TABLE variations (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  image_url VARCHAR(255),
  var_key VARCHAR(150),
  var_value VARCHAR(150),
  is_priority BOOLEAN
);

-- (1, "https://images-na.ssl-images-amazon.com/images/I/619S7EI24dL._SL1000_.jpg", "color", "White Gold", true),
-- (1, "https://images-na.ssl-images-amazon.com/images/I/51fMx0tuJRL._SL1000_.jpg", "color", "White Gold", false),
-- (1, "https://images-na.ssl-images-amazon.com/images/I/516slUhAghL._SL1000_.jpg", "color", "White Gold", false),
-- (1, "https://images-na.ssl-images-amazon.com/images/I/51l-vUuha7L._SL1000_.jpg", "color", "White Gold", false),
-- (1, "https://images-na.ssl-images-amazon.com/images/I/51NCI69zTHL._SL1000_.jpg", "color", "White Gold", false),
-- (1, "https://images-na.ssl-images-amazon.com/images/I/41wUtbB5ZYL._SL1000_.jpg", "color", "White Gold", false),
