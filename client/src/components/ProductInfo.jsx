import Rating from './Rating.jsx';
import AmazonsChoice from './AmazonsChoice.jsx';
import Countdown from './Countdown.jsx';
import SelectorDropdown from './SelectorDropdown.jsx';
import SelectorImage from './SelectorImage.jsx';
import DescBullet from './DescBullet.jsx';
import styles from '../styles/ProductInfo.css';
import {addCommas, renderPrice, savedPercent} from './ProductInfo.js';

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
  styleUsedBold,
} = styles;


// here i had functions addCommas and rednerPrice

const ProductInfo = (props) => {
  const {
    data, timeLeft, imageCb, dropdownCb, selectedVariation,
  } = props;

  const {
    amazonsChoice, available, categoryName, curSelect, description, freeReturns,
    freeShipping, id, hasCountdown, images, price, priceList, productName,
    questionsCount, ratingsAverage, ratingsCount, sellerName, soldByName,
    usedCount, usedPrice,
  } = data;

  return (
    <div className={styleMain}>
      {/* begin TitleBlock */}
      <div className={styleTitleBlock}>
        <h3 className={styleProductName}>{productName}</h3>
        <div className={styleSeller}>
          by&nbsp;
          <a className={styleSellerName} href="#">
            {sellerName}
          </a>
        </div>

        <Rating
          className={styleRatingsAverage}
          rating={ratingsAverage}
          numReviews={ratingsCount}
        />

        {ratingsCount
          ? (
            <a className={styleRatingsCount} href="#">
              {addCommas(ratingsCount)}
              &nbsp;customer&nbsp;
              {ratingsCount === 1 ? 'review' : 'reviews'}
            </a>
          )
          : ''
        }

        {ratingsCount && questionsCount ? <span className={styleSubhedPipe}>|</span> : ''}

        {questionsCount ? (
          <a className={styleQuestionsCount} href="#">
            {addCommas(questionsCount)}
            &nbsp;answered&nbsp;
            {questionsCount === 1 ? 'question' : 'questions'}
          </a>)
          : ''
        }

        {amazonsChoice ? (
          <div>
            <AmazonsChoice />
          </div>)
          : ''
        }
      </div>
      {/* end TitleBlock */}

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
                {savedPercent(priceList, price)}
                %)
              </td>
            </tr>)
            : <tr><td /></tr>}
        </tbody>
      </table>

      {available
        ? (<div className={styleAvailable}>In Stock.</div>)
        : (<div className={styleUnavailable}>Out of Stock.</div>)
      }

      {hasCountdown && available
        ? (<Countdown timeLeft={timeLeft} />)
        : ''
      }

      {/* dropdown size selector */}
      {images && images.size && available
        ? (
          <SelectorDropdown
            images={images.size}
            cb={dropdownCb}
          />
        )
        : ''
      }

      {/* image color selector */}
      {images && images.color && available
        ? (
          <SelectorImage
            images={images.color}
            cb={imageCb}
            selectedVariation={selectedVariation}
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

      <div className={styleCompare}>
        <a href="#">
          Compare with similar items
        </a>
      </div>

      {usedCount > 0 && available
        ? (
          <div className={styleUsed}>
            <a href="#">
              <span className={styleUsedBold}>Used & new</span>
              &nbsp;(
              {usedCount}
            ) from&nbsp;
              {renderPrice(usedPrice)}
            </a>
            {freeShipping
              ? ' & FREE shipping'
              : ''
            }
            .&nbsp;
            <a href="#">Details</a>
          </div>
        )
        : ''
      }
    </div>
  );
};

export default ProductInfo;
