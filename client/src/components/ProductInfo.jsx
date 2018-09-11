const React = require('react');
import DescBullet from './DescBullet.jsx';
import Selector from './Selector.jsx';
import Rating from './Rating.jsx';
import styles from '../styles/ProductInfo.css';
const { style_main,
        style_title_block,
        style_product_name,
        style_seller_name,
        style_ratings_average,
        style_ratings_count,
        style_ratings_stars,
        style_num_questions,
        style_price,
        style_list_price,
        style_you_save,
        style_free_shipping,
        style_sale,
        style_description
      } = styles;


const addComma = function(num) {
  // add a comma every three places e.g. 1,000
  // used for review and questions counts
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = props => {
  const {seller_url, seller_name, product_name, ratings_average, ratings_count, num_questions, list_price, price, images, free_shipping, sale, description} = props.data;

  return (
    <div className={style_main}>
      <div className={style_title_block}>
        <a className={style_seller_name} href={seller_url}>{seller_name}</a>
        <h3 className={style_product_name}>{product_name}</h3>

        {/* <span className={style_ratings_average} rating=${Math.round(ratings_average * 10) / 10}></span> */}
        <Rating className={style_ratings_average} rating={Math.round(ratings_average * 10) / 10}/>

        <a className={style_ratings_count} href="#">
          {ratings_count ?
              `${addComma(ratings_count)} customer reviews`
            : ""}
        </a>
        <a className={style_num_questions} href="#">
          {num_questions ?
              `${addComma(num_questions)} answered questions`
            : ""}
        </a>
      </div>

      <div className={style_list_price}>{
        list_price ?
        `List Price: $ ${list_price / 1}`
        : ""
      }</div>

      <div>
        {price ? `Price: ` : ""}
        <span className={style_price}>{price ? `$${price / 100}` : ""}</span>
      </div>

      {list_price && price
        ? <div className={style_you_save}>
            You Save: $${list_price - price}
            (${Math.round(list_price - price) / list_price})
          </div>
        : ""}


      <Selector images={props.data.images} cb={props.custCb}/>

      {free_shipping == 1 ?
        <div className={style_free_shipping}>FREE Shipping <a href="#">Details</a></div>
        : ""
      }
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
