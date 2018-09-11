/*

Double check id=46

*/

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
        style_subhed_pipe,
        style_questions_count,

        style_available,
        style_unavailable,

        style_price_label,
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

const renderPrice = function(num) {
  return num % 1 === 0 ? num + '.00' : num;
}

const ProductInfo = props => {
  const {available,
    seller_url, seller_name, product_name, ratings_average, ratings_count, questions_count, price_list_price, price, images, free_shipping, sale, description} = props.data;

  return (
    <div className={style_main}>
      <div className={style_title_block}>
        <a className={style_seller_name} href={seller_url}>{seller_name}</a>
        <h3 className={style_product_name}>{product_name}</h3>

        <Rating className={style_ratings_average} rating={Math.round(ratings_average * 10) / 10}/>

        {ratings_count ?
          <a className={style_ratings_count} href="#">{addComma(ratings_count)} customer reviews</a>
        : ""}

        {ratings_count && questions_count ? <span className={style_subhed_pipe}>|</span> : ''}

        {questions_count ?
          <a className={style_questions_count} href="#">{addComma(questions_count)} answered questions</a>
        : ""}

      </div>


      <table><tbody>
        {price_list_price ? <tr>
            <td className={style_price_label}>List Price: </td>
            <td className={style_list_price}>${renderPrice(price_list_price)}</td>
          </tr>
        : <tr><td></td></tr>}
        {price ? <tr>
            <td className={style_price_label}>Price: </td>
            <td className={style_price}>${renderPrice(price)}</td>
          </tr>
        : <tr><td></td></tr>}
        {price_list_price && price ? <tr>
            <td className={style_price_label}>You Save: </td>
            <td className={style_you_save}>
              ${renderPrice((price_list_price - price))}&nbsp;
              ({Math.round(((price_list_price - price)/price_list_price) * 100)}%)
            </td></tr>
          : <tr><td></td></tr>}
      </tbody></table>


      {available ? <div className={style_available}>In Stock.</div> : <div className={style_unavailable}>Out of Stock.</div>}

      <Selector images={props.data.images} cb={props.custCb}/>

      {free_shipping == 1 ?
        <div className={style_free_shipping}>FREE Shipping <a href="#">Details</a></div>
        : ""
      }
      {sale ? "ON SALE" : ""}
      <ul className={style_description}>
        {/* convert \n-separated text to bulleted list */}
        {description
          ? description
              .split(/\n/g)
              .map((x, i) => <DescBullet text={x} key={i} />)
          : "no description"}
      </ul>
    </div>
  )
};

export default ProductInfo;
