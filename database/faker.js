const cats = require('./cats');
const faker = require('faker');
const db = require('./db');

const colors_arr = ["Medium Spring Green","Coral","Lawn Green","Yellow","Orange","Light Steel Blue","Fire Brick","Light Grey","Dark Goldenrod","Burly Wood","Dark Slate Blue","Cornflower Blue","Powder Blue","Dark Blue","Dark Slate Gray","Maroon","Silver","Light Salmon","Seashell","Medium Sea Green"];

const randImArr = function (){
  let num = Math.round(Math.random()*3)+1;
  return "[" + cats.data.sort(()=>0.5-Math.random()).slice(0,num).map(x=>`'${x}'`).join(',') + "]";
}

const createQuery = function(){
  var price = parseInt(faker.commerce.price());
  var percent1 = Math.round(Math.random()*20+80);
  var percent2 = Math.round(Math.random()*50+50);
  var list_price = price * (percent1/100);
  var used_price = list_price * (percent2/100);
  var colors_snippet = colors_arr.sort( function() { return 0.5 - Math.random() } ).slice(0,Math.round(Math.random()/2.5*colors_arr.length) + 1).sort();

  return (
  `INSERT INTO products \
  (product_name,product_url,seller_name,seller_url,ratings_average,ratings_count,questions_count,category_name,category_url,price,price_list_price,free_returns,free_shipping,sold_by_name,sold_by_url,available,description,used_count,used_price,variations) \
  VALUES (
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
    "${/*description*/ faker.lorem.lines().replace(/\\n/g,'<br>')}",\
    "${/*used_count*/ Math.round(Math.random()*20)}",\
    "${/*used_price*/ used_price}",\
    "{${/*images*/ colors_arr.map(x => `'${x}': ${randImArr()}`).join(', ')}}"\
  );`);
};

var query = '';
for (var i = 0; i < 5; i++) {
  query += createQuery();
}

db.insertProduct(query, (err, res) => {
  console.log('-------------------------------- INSERTED')
  // console.log(res);
});
