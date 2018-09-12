/* (1) set numToGenerate */
var numToGenerate = 100;

/* (2) run "node database/faker.js" in the terminal
node database/faker.js
*/

/*
--- NOTES ---
delete "link" columns

Add "fit" (maybe), "Prime"
Add star distribution and fit distribution

Breadcrumb trail?
"Style" in addition to Size and Color?
Replace "In stock" with "available"?
Convert prices back to normal, eg $5.99 = '5.99' and not '599'
More images per product
*/

// INSERT INTO products (id, product_name, product_url, seller_name, seller_url, ratings_average, ratings_count, questions_count, category_name, category_url, price, price_list, free_returns, free_shipping, sold_by_name, sold_by_url, available, description, used_count, used_price) VALUES (101, "LG G6+ - 128 GB - Unlocked (AT&T/T-Mobile/Verizon) - Black - Prime Exclusive", "#", "LG", "#", 4, 80, 86, "Cell Phones & Accessories", "#", 40999, 79999, 1, 1, "Some sketchy guy", "#", 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare augue non eleifend accumsan. \nMaecenas sit amet maximus lacus. Nullam eu placerat metus, et aliquet ex. Vivamus justo magna, tincidunt a convallis eu, semper vitae nunc. \nSed tincidunt quis purus vitae dictum. \nDonec eu ante pharetra, maximus erat sit amet, imperdiet odio. \nIn tincidunt feugiat ligula, quis tempus leo eleifend in. Pellentesque vitae lectus est.", 20, 30749);

// INSERT INTO images (product_id,var_key,var_value,image_url) VALUES (101, "","","https://images-na.ssl-images-amazon.com/images/I/61Rh3tVbr-L._SL1200_.jpg");


const cats = require('./cats');
const faker = require('faker');
const db = require('./db');

// possible product variations to choose from
const variations = [
  {
    category: "color",
    data: ["Medium Spring Green","Coral","Lawn Green","Yellow","Orange","Light Steel Blue","Fire Brick","Light Grey","Dark Goldenrod","Burly Wood","Dark Slate Blue","Cornflower Blue","Powder Blue","Dark Blue","Dark Slate Gray","Maroon","Silver","Light Salmon","Seashell","Medium Sea Green"]
  },
  {
    category: "size",
    data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
  }
];

// function randImArr: gets a randomly-sized part of the image array (sourced from from cats.js)
const randImArr = function () {
  // num = a random number between 1 and 4, representing number of images to get
  let howManyImages = Math.round(Math.random() * 3) + 1;
  return "[" +
      // randomize cats
      cats.data.sort(() => 0.5 - Math.random())
      // get a random slice of the array
      .slice(0, howManyImages)
      // put each entry between single quotes
      .map(x => `'${x}'`)
      // join by comma
      .join(',')
    + "]";
}

var truncateToDecimalPlace = function(num, places){
  places = places || 0;
  places = Math.pow(10, places);
  return Math.round(num * places) / places;
}

var randomNumFromRange = function(lowerBound, upperBound, growthRate, decimalPlaces) {
  if (growthRate === undefined || growthRate === 'exp'){
    // more low numbers
    growthRate = 2;
  } else if (growthRate === 'log'){
    // more high numbers. a higher denominator means on average higher nums are generated
    growthRate = 1/1.5;
  }
  return truncateToDecimalPlace((Math.pow(Math.random(), growthRate )) * (upperBound-lowerBound) + lowerBound, decimalPlaces)
}

const createProductQuery = function(howMany){

var queryConcat = `INSERT INTO products (\
product_name,\
seller_name,\
ratings_average,\
ratings_count,\
questions_count,\
amazons_choice,\
category_name,\
price_list,\
price,\
free_returns,\
free_shipping,\
sold_by_name,\
available,\
has_countdown,\
description,\
used_count,\
used_price\
) VALUES `;

var ratings_total = 0;
  for (var i = 0; i < howMany; i++) {
    if (i > 0) {
      queryConcat += ",";
    }

    // the 9 is to put the price within an affordable range haha
    var listPrice = parseInt(faker.commerce.price() / 9);

    // price is between 80% to 95% of the list price
    var price = listPrice * (randomNumFromRange(80, 95); / 100);

    // used price is between 50% to 95% of the price
    var usedPrice = price * (randomNumFromRange(50, 95) / 100);

    // generate a random sequence of departments for breadcrumb
    var department = `${faker.commerce.department()}`;
    var times = Math.round(Math.random() * 4) + 1;
    Array(times).fill("").forEach(function(){
      department += `\n${faker.commerce.department()}`;
    })

    queryConcat += `(
"${/*product_name*/ faker.commerce.productName()}",\
"${/*seller_name*/ faker.company.companyName()}",\
"${/*ratings_average*/ randomNumFromRange(0.5, 5, 'log', 1)}",\
"${/*ratings_count*/ randomNumFromRange(5, 1000) }",\
"${/*questions_count*/ randomNumFromRange(2, 30, 'log')}",\
"${/*amazons_choice*/ randomNumFromRange(0, 1)}",\
"${/*category_name*/ department}",\
"${/*price_list*/ listPrice}",\
"${/*price*/ price}",\
"${/*free_returns*/ randomNumFromRange(0, 1)}",\
"${/*free_shipping*/ randomNumFromRange(0, 1)}",\
"${/*sold_by_name*/ faker.company.companyName()}",\
"${/*available*/ randomNumFromRange(0, 1, 'log')}",\
"${/*has_countdown*/ randomNumFromRange(0, 1)}",\
"${/*description*/ faker.lorem.lines().replace(/\n/g,'\\n')}",\
"${/*used_count*/ randomNumFromRange(1, 20)}",\
"${/*used_price*/ usedPrice}"\
)`;

  } // end for loop

  return queryConcat + ";";
};

function createImageQuery(howMany){
  let queryConcat = `INSERT INTO images (product_id,var_key,var_value,image_url) VALUES `;
  var imindex = 0;

  // for each product_id, add a new query to the queryConcat string
  for (var productID = 1; productID <= howMany; productID++) {
    let categoryObj = variations[Math.round(Math.random())];

    // loop through a few items at a random section of the array
    let randStart = Math.round(Math.random() * (categoryObj.data.length / 2));
    let maxItems = 5;
    let randEnd = randStart + Math.ceil(Math.random() * maxItems);

    for (var j = randStart; j < randEnd; j++) {
      if (imindex > 0) {
        queryConcat += `,`;
      }
      queryConcat += `(\
"${/*product_id*/ productID}",\
"${/*var_key*/ categoryObj ? categoryObj.category : ''}",\
"${/*var_value*/ categoryObj ? categoryObj.data[j] : ''}",\
"${/*image_url*/ cats.data[imindex % cats.data.length]}"\
)`;
      imindex++;
    }
  }

  return queryConcat + ";";
}

// reset products table and insert rows
db.resetTable("products", () => {
  db.insertRow(createProductQuery(numToGenerate), (res, con) => {
    console.log(`  INSERTED ${numToGenerate} ROWS into products`);

    // reset images table and insert rows
    db.resetTable("images", () => {
      db.insertRow(createImageQuery(numToGenerate), (res, con) => {

        // log success
        console.log(`  INSERTED ${numToGenerate} ROWS into images`);
        console.log('Data generation finished. Press ctrl-C to exit.');
      });
    });
  });
});
