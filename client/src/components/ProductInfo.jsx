import Rating from './Rating.jsx';
import Countdown from './Countdown.jsx';
import SelectorDropdown from './SelectorDropdown.jsx';
import SelectorImage from './SelectorImage.jsx';
import DescBullet from './DescBullet.jsx';
import styles from '../styles/ProductInfo.css';
import {addComma, renderPrice} from './ProductInfo.js';

const React = require('react');

const {
  styleMain,
  styleTitleBlock,
  styleProductName,
  styleSeller,
  styleSellerName,
  styleRatingsAverage,
  styleRatingsCount,
  styleSubhedPipe,
  styleQuestionsCount,
  styleAmazonsChoice,
  styleAmazonsChoiceOrange,
  styleAmazonsChoiceTriangle,
  styleAvailable,
  styleUnavailable,
  stylePriceLabel,
  stylePrice,
  styleListPrice,
  styleYouSave,
  styleFreeShipping,
  styleSale,
  styleDescription,
  styleCompare,
  styleUsed,
  styleUsedBold
} = styles;


// here i had functions addComma and rednerPrice

const ProductInfo = (props) => {
  const { data, timeLeft } = props;

  const {
    amazonsChoice, available, categoryName, curSelect, description, freeReturns,
    freeShipping, id, hasCountdown, images, price, priceList, productName,
    questionsCount, ratingsAverage, ratingsCount, sellerName, soldByName,
    usedCount, usedPrice
  } = data;

  return (
    <div className={styleMain}>

      <div className={styleTitleBlock}>
        <h3 className={styleProductName}>{productName}</h3>
        <div className={styleSeller}>
          by&nbsp;
          <a className={styleSellerName} href="http://hackreactor.com">
            {sellerName}
          </a>
        </div>

        <Rating className={styleRatingsAverage} rating={Math.round(ratingsAverage * 10) / 10} />

        {ratingsCount
          ? (
            <a className={styleRatingsCount} href="http://hackreactor.com">
              {addComma(ratingsCount)}
              &nbsp;customer&nbsp;
              {ratingsCount === 1 ? 'review' : 'reviews'}
            </a>
          )
          : ''
        }

        {ratingsCount && questionsCount ? <span className={styleSubhedPipe}>|</span> : ''}

        {questionsCount ? (
          <a className={styleQuestionsCount} href="http://hackreactor.com">
            {addComma(questionsCount)}
            &nbsp;answered&nbsp;
            {questionsCount === 1 ? 'question' : 'questions'}
          </a>)
          : ''
        }

        {amazonsChoice ? (
          <div>
            <div className={styleAmazonsChoice}>
              Amazon&apos;s&nbsp;
              <span className={styleAmazonsChoiceOrange}>Choice</span>
            </div>
          </div>)
          : ''
        }

      </div>


      <table>
        <tbody>
          {priceList ? (
            <tr>
              <td className={stylePriceLabel}>List Price: </td>
              <td className={styleListPrice}>{renderPrice(priceList)}</td>
            </tr>)
            : (<tr><td /></tr>)}

          {price ? (
            <tr>
              <td className={stylePriceLabel}>Price: </td>
              <td className={stylePrice}>{renderPrice(price)}</td>
            </tr>)
            : (<tr><td /></tr>)}

          {priceList && price ? (
            <tr>
              <td className={stylePriceLabel}>You Save: </td>
              <td className={styleYouSave}>
                {renderPrice((priceList - price))}
                &nbsp;(
                {Math.round(((priceList - price) / priceList) * 100)}
                %)
              </td>
            </tr>)
            : <tr><td /></tr>}
        </tbody>
      </table>

      {available ?
        (<div className={styleAvailable}>In Stock.</div>)
        : (<div className={styleUnavailable}>Out of Stock.</div>)
      }

      {hasCountdown && available ?
        (<Countdown timeLeft={timeLeft} />)
        : ''
      }

      {/* dropdown size selector */}
      {props.data.images && props.data.images.size && available ?
        (<SelectorDropdown images={props.data.images.size} cb={props.dropdownCb} />)
        : ''
      }

      {/* image color selector */}
      {props.data.images && props.data.images.color && available ?
        (
          <SelectorImage
            images={props.data.images.color}
            cb={props.imageCb}
            selectedVariation={props.selected_variation}
          />
        )
        : ''
      }

      {/* {sale ? "ON SALE" : ''} */}

      <ul className={styleDescription}>
        {/* convert \n-separated text to bulleted list */}
        {description
          ? description
            .split(/\n/g)
            .map(x => <DescBullet text={x} key={x} />)
          : ''}
      </ul>

      <div className={styleCompare}><a href="http://hackreactor.com">Compare with similar items</a></div>

      {usedCount > 0 && available ?
        (
          <div className={styleUsed}>
            <a href="http://hackreactor.com">
              <span className={styleUsedBold}>Used & new</span>
              &nbsp;(
              {usedCount}
            ) from&nbsp;
              {renderPrice(usedPrice)}
            </a>
            {freeShipping ?
              ' & FREE shipping'
              : ''
            }
            .&nbsp;
            <a href="http://hackreactor.com">Details</a>
          </div>
        )
        : ''
      }


    </div>
  );
};

export default ProductInfo;
