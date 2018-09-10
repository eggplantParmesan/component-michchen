const cats = require('./cats');
const faker = require('faker');
const db = require('./db');

const variations = [
  {
    category: "color",
    data: ["Medium Spring Green","Coral","Lawn Green","Yellow","Orange","Light Steel Blue","Fire Brick","Light Grey","Dark Goldenrod","Burly Wood","Dark Slate Blue","Cornflower Blue","Powder Blue","Dark Blue","Dark Slate Gray","Maroon","Silver","Light Salmon","Seashell","Medium Sea Green"]
  },
  {
    category: "size",
    data: [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10]
  }
];

const randImArr = function (){
  let num = Math.round(Math.random()*3)+1;
  return "[" + cats.data.sort(()=>0.5-Math.random()).slice(0,num).map(x=>`'${x}'`).join(',') + "]";
}

const createProductQuery = function(howMany){
  var price = parseInt(faker.commerce.price());
  var percent1 = Math.round(Math.random()*20+80);
  var percent2 = Math.round(Math.random()*50+50);
  var list_price = price * (percent1/100);
  var used_price = list_price * (percent2/100);

  var queryConcat = `INSERT INTO products (product_name,product_url,seller_name,seller_url,ratings_average,ratings_count,questions_count,category_name,category_url,price,price_list_price,free_returns,free_shipping,sold_by_name,sold_by_url,available,description,used_count,used_price) VALUES `;

  for (var i = 0; i < howMany; i++) {
    if (i > 0) {
      queryConcat += ",";
    }
    queryConcat += `(
"${/*product_name*/ faker.commerce.productName()}",\
"${/*product_url*/ "#"}",\
"${/*seller_name*/ faker.company.companyName()}",\
"${/*seller_url*/ "#"}",\
"${/*ratings_average*/ Math.round(Math.random()*500)/100}",\
"${/*ratings_count*/ Math.round(Math.random()*1000)}",\
"${/*questions_count*/ Math.round(Math.random()*1000)}",\
"${/*category_name*/ faker.commerce.department()}",\
"${/*category_url*/ "#"}",\
"${/*price*/ price}",\
"${/*price_list_price*/ list_price}",\
"${/*free_returns*/ Math.round(Math.random())}",\
"${/*free_shipping*/ Math.round(Math.random())}",\
"${/*sold_by_name*/ faker.company.companyName()}",\
"${/*sold_by_url*/ "#"}",\
"${/*available*/ Math.round(Math.random())}",\
"${/*description*/ faker.lorem.lines().replace(/\n/g,'\\n')}",\
"${/*used_count*/ Math.round(Math.random()*20)}",\
"${/*used_price*/ used_price}"\
)`;
  }
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

var num = 100;

// reset products table and insert rows
db.resetTable("products", () => {
  db.insertRow(createProductQuery(num), (res, con) => {
    console.log(`INSERTED ${num} ROWS into products`);

    // reset products table and insert rows
    db.resetTable("images", () => {
      db.insertRow(createImageQuery(num), (res, con) => {

        // success
        console.log(`INSERTED ${num} ROWS into images`);
        console.log('Data generation finished. Press ctrl-C to exit.');
      });
    });
  });
});
