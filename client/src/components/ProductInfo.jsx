const React = require('react');
import Rating from './Rating.jsx';
import Countdown from './Countdown.jsx';
import SelectorDropdown from './SelectorDropdown.jsx';
import SelectorImage from './SelectorImage.jsx';
import DescBullet from './DescBullet.jsx';

import styles from '../styles/ProductInfo.css';
const { style_main,
        style_title_block,
        style_product_name,
        style_seller,
        style_seller_name,

        style_ratings_average,
        style_ratings_count,
        style_subhed_pipe,
        style_questions_count,

        style_amazons_choice,
        style_amazons_choice_orange,
        style_amazons_choice_triangle,

        style_available,
        style_unavailable,

        style_price_label,
        style_price,
        style_list_price,
        style_you_save,

        style_free_shipping,
        style_sale,
        style_description,

        style_compare,
        style_used,
        style_used_bold
      } = styles;


// add a comma every three places e.g. 1,000
// used for review and questions counts
const addComma = function(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// add .00 to a price if it has no decimals
const renderPrice = function(num) {
  num = Math.round(num * 100) / 100;
  if (num % 1 === 0) {
    num += '.00';
  } else if ((num* 10) % 1 === 0) {
    num += '0';
  }

  return '$' + num;
}

const ProductInfo = props => {
  const { amazons_choice,
  available,
  category_name,
  curSelect,
  description,
  free_returns,
  free_shipping,
  id,
  has_countdown,
  images,
  price,
  price_list,
  product_name,
  questions_count,
  ratings_average,
  ratings_count,
  seller_name,
  sold_by_name,
  used_count,
  used_price
} = props.data;

  return (
    <div className={style_main}>
      <div className={style_title_block}>
        <h3 className={style_product_name}>{product_name}</h3>
        <div className={style_seller}>by <a className={style_seller_name} href="#">{seller_name}</a></div>

        <Rating className={style_ratings_average} rating={Math.round(ratings_average * 10) / 10}/>

        {ratings_count ?
          <a className={style_ratings_count} href="#">{addComma(ratings_count)} customer {ratings_count == 1 ? 'review' : 'reviews'}</a>
        : ''}

        {ratings_count && questions_count ? <span className={style_subhed_pipe}>|</span> : ''}

        {questions_count ?
          <a className={style_questions_count} href="#">{addComma(questions_count)} answered {questions_count == 1 ? 'question' : 'questions'}</a>
        : ''}

        {amazons_choice ?
          <div>
            <div className={style_amazons_choice}>
              Amazon's <span className={style_amazons_choice_orange}>Choice</span>
            </div>
            {/* <div className={style_amazons_choice_triangle}>&nbsp;</div> */}
          </div>
          : ''
        }

      </div>


      <table><tbody>
        {price_list ? <tr>
            <td className={style_price_label}>List Price: </td>
            <td className={style_list_price}>{renderPrice(price_list)}</td>
          </tr>
        : <tr><td></td></tr>}
        {price ? <tr>
            <td className={style_price_label}>Price: </td>
            <td className={style_price}>{renderPrice(price)}</td>
          </tr>
        : <tr><td></td></tr>}
        {price_list && price ? <tr>
            <td className={style_price_label}>You Save: </td>
            <td className={style_you_save}>
              {renderPrice((price_list - price))}&nbsp;
              ({Math.round(((price_list - price)/price_list) * 100)}%)
            </td></tr>
          : <tr><td></td></tr>}
      </tbody></table>

      <a href="#">Details</a>

      {available ?
        <div className={style_available}>In Stock.</div>
      : <div className={style_unavailable}>Out of Stock.</div>
      }

      {has_countdown && available ?
        <Countdown/>
      : ""
      }

      {/* dropdown size selector */}
      {props.data.images ?
        props.data.images.size ?
          <SelectorDropdown images={props.data.images} cb={props.dropdownCb}/>
        : ""
      : ""}

      {/* image color selector */}
      {props.data.images ?
        props.data.images.color ?
          <SelectorImage images={props.data.images} cb={props.imageCb}/>
        : ""
      : ""}


      {/* {free_shipping == 1 ?
        <div className={style_free_shipping}>FREE Shipping <a href="#">Details</a></div>
        : ''
      } */}

      {/* {sale ? "ON SALE" : ''} */}

      <ul className={style_description}>
        {/* convert \n-separated text to bulleted list */}
        {description
          ? description
              .split(/\n/g)
              .map((x, i) => <DescBullet text={x} key={i} />)
          : ''}
      </ul>

      <a href="#" className={style_compare}>Compare with similar items</a>

      {used_count > 0 && available ?
        <div className={style_used}><a href="#"><span className={style_used_bold}>Used & new</span> ({used_count}) from {renderPrice(used_price)}</a>
          {free_shipping ?
            ' & FREE shipping'
            : ''
          }. <a href="#">Details</a>
        </div>
        : ''
      }


    </div>
  )
};

export default ProductInfo;
