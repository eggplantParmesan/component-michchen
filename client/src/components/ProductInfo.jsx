const React = require("react");
import DescBullet from "./DescBullet.jsx";
import Selector from "./Selector.jsx";

const addComma = function(num) {
  // add a comma every three places e.g. 1,000
  // mostly used for review counts
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = props => {
  const {title_block, title, ratings_stars} = props.styles;
  const {seller_url, seller_name, product_name, ratings_average, ratings_count, num_questions, list_price, price, images, free_shipping, sale, description} = props.data;

  return (
    <div style={props.styles}>
      <div id="title_block" style={title_block}>
        <a id="seller_name" href={seller_url}>{seller_name}</a>
        <h3 id="product_name" style={title}>{product_name}</h3>

        <div id="ratings_stars" style={ratings_stars}>stars</div>
        <a id="ratings_average" href="#">{ratings_average
          ? Math.round(ratings_average * 10) / 10 + " stars"
          : ""}</a>
        <a id="ratings_count" href="#">{ratings_count
          ? addComma(ratings_count) + " customer reviews"
          : ""}</a>
        <a id="num_questions" href="#">{num_questions
          ? addComma(num_questions) + " answered questions"
          : ""}</a>
      </div>

      {list_price ? "List Price: $" + list_price / 1 : ""}
      <br />
      {price ? "Price: $" + price / 1 : ""}
      <br />
      {list_price && price
        ? `You Save: $${list_price - price} (${Math.round(
            list_price - price
          ) / list_price}%)`
        : ""}
      <br />

      <Selector images={props.data.images} cb={props.custCb}/>
      <br />
      {free_shipping === 1 ? "FREE Shipping Details" : ""}
      <br />
      {sale ? "ON SALE" : ""}
      <br />
      <ul>
        {description
          ? description
              .split(/\n/g)
              .map((x, i) => <DescBullet text={x} key={i} />)
          : "no description"}
      </ul>
      <br />
      <br />
    </div>
  )
};

export default ProductInfo;
