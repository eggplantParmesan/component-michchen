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

const createQuery = function(howMany){
  var price = parseInt(faker.commerce.price());
  var percent1 = Math.round(Math.random()*20+80);
  var percent2 = Math.round(Math.random()*50+50);
  var list_price = price * (percent1/100);
  var used_price = list_price * (percent2/100);

  var queryConcat = `DELETE FROM products;\
ALTER TABLE products AUTO_INCREMENT=1;\
INSERT INTO products (product_name,product_url,seller_name,seller_url,ratings_average,ratings_count,questions_count,category_name,category_url,price,price_list_price,free_returns,free_shipping,sold_by_name,sold_by_url,available,description,used_count,used_price) VALUES `;

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
  let queryConcat = `DELETE FROM images;\
ALTER TABLE images AUTO_INCREMENT=1;\
INSERT INTO images (product_id,var_key,var_value,image_url) VALUES `;

  var imindex = 0;

  for (var i = 1; i <= howMany; i++) {
    var key = Math.round(Math.random()*2);
    let varInfo = variations[key - 1];

    if (i > 1) {
      queryConcat += ",";
    }

    // cycle around when index passes the end of the array of image urls

// same: product_id, var_key
// new: image_url, var_info-
    let jStart = Math.round(Math.random() * (varInfo.data / 2));
    console.log(jStart);
    for (var j = jStart; j < jStart + (Math.random() * 3 + 1); j++) {

      queryConcat += `(\
        "${/*product_id*/ i}",\
        "${/*var_key*/ varInfo ? varInfo.category : ''}",\
        "${/*var_value*/ varInfo ? varInfo.data[j] : ''}"\
        "${/*image_url*/ cats.data[imindex % cats.data.length]}",\
      )`;
    }
    imindex++;
  }

  // "${/*var_value*/ varInfo ? varInfo.data.splice(Math.random() * (varInfo.data.length/2), Math.random()*4+2).map(x=>`'${x}'`).join(','): ''}"\

  return queryConcat + ";";
}


// console.log(createImageQuery(2));

var num = 2;
//
// let product_query = createQuery(num); // console.log(product_query);
// db.insertRow(product_query, (err, res) => {
//   console.log(`INSERTED ${num} ROWS`);
// });
//
let image_query = createImageQuery(num);
console.log(image_query);
// db.insertRow(image_query, (err, res) => {
//   console.log(`INSERTED ${num} ROWS`);
// });
