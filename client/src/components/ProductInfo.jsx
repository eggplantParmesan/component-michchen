const React = require("react");
import DescBullet from "./DescBullet.jsx";

const addComma = function(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = props => (
  <div>
    {props.data.category_name ? (
      <a href={props.data.category_url}>{props.data.category_name}</a>
    ) : (
      ""
    )}
    <h3>{props.data.product_name}</h3>
    by <a href={props.data.seller_url}>{props.data.seller_name}</a>
    <br />
    {props.data.ratings_average
      ? Math.round(props.data.ratings_average*10)/10 + " stars"
      : ""}
    <br />
    {props.data.ratings_count
      ? addComma(props.data.ratings_count) + " customer reviews"
      : ""}
    <br />
    {props.data.num_questions
      ? addComma(props.data.num_questions) + " answered questions"
      : ""}
    <br />
    {props.data.list_price ? "List Price: $" + props.data.list_price / 1 : ""}
    <br />
    {props.data.price ? "Price: $" + props.data.price / 1 : ""}
    <br />
    {props.data.list_price && props.data.price
      ? `You Save: $${props.data.list_price - props.data.price} (${Math.round(
          props.data.list_price - props.data.price
        ) / props.data.list_price}%)`
      : ""}
    <br />
    {props.data.free_shipping === 1 ? "FREE Shipping Details" : ""}
    <br />
    {props.data.sale ? "ON SALE" : ""}
    <br />
    <ul>
      {props.data.description
        ? props.data.description
            .split(/\n/g)
            .map((x, i) => <DescBullet text={x} key={i} />)
        : "no description"}
    </ul>
    <br />
    <br />
  </div>
);

export default ProductInfo;

/*
free_returns: 0
num_used: 7
size: ""
sold_by: null
sold_by_url: null
used_price: 190
*/
