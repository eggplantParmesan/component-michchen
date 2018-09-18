import styles from '../styles/Histogram.css';
import {randomDistribution} from './PopupHistogram.js';

const React = require('react');

const {
  stylesMain, stylesAvgRatingText, stylesStarText, stylesBar, stylesBarInner,
  stylesBarOuter, stylesPercentageText, stylesSeeAllReviews,
} = styles;

const PopupHistogram = (props) => {
  const percentageArr = Object.entries(randomDistribution()).sort((x, y) => x[0] < y[0]);
  const { rating, numReviews, boxHeight, boxWidth } = props;

  return (
    <div>
      <span className={stylesAvgRatingText}>
        {`${rating} out of 5 stars` || ''}
      </span>
      <table className={stylesMain} cellSpacing="3">
        <tbody>
          {percentageArr.map(keyValuePair => (
            <HistogramBar
              key={keyValuePair}
              num={keyValuePair[0]}
              value={keyValuePair[1]}
            />
          ))
          }
        </tbody>
      </table>
      <a href="#" className={stylesSeeAllReviews}>
        See all&nbsp;
        {numReviews}
        &nbsp;reviews &raquo;
      </a>
    </div>
  );
};

const HistogramBar = (props) => {
  const { value, num } = props;
  const percentageRender = { width: `${Math.round(value * 100)}%` };
  return (
    <tr>
      <td width="50">
        <a href="#" className={stylesStarText}>
          {num}
          &nbsp;
          star
        </a>
      </td>
      <td className={`${stylesBar} bartest`}>
        <div className={stylesBarOuter} style={percentageRender}>
          <div className={stylesBarInner} />
        </div>
      </td>
      <td width="35">
        <span className={stylesPercentageText}>
          {`${Math.round(value * 100)}%`}
        </span>
      </td>
    </tr>
  );
};

export default PopupHistogram;
