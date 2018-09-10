const React = require("react");
import DescBullet from "./DescBullet.jsx";
import Selector from "./Selector.jsx";

const addComma = function(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = props => (
  <div style={props.styles}>
    <div id="title_block" style={props.styles.title_block}>
      <a id="seller_name" href={props.data.seller_url}>{props.data.seller_name}</a>
      <h3 id="product_name" style={props.styles.title}>{props.data.product_name}</h3>

      <div id="ratings_stars" style={props.styles.ratings_stars}>stars</div>
      <a id="ratings_average" href="#">{props.data.ratings_average
        ? Math.round(props.data.ratings_average*10)/10 + " stars"
        : ""}</a>
      <a id="ratings_count" href="#">{props.data.ratings_count
        ? addComma(props.data.ratings_count) + " customer reviews"
        : ""}</a>
      <a id="num_questions" href="#">{props.data.num_questions
        ? addComma(props.data.num_questions) + " answered questions"
        : ""}</a>
    </div>


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


    <Selector images={props.data.images} cb={props.custCb}/>
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
