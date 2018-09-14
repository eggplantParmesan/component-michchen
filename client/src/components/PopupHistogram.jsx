import styles from '../styles/Histogram.css';

const React = require('react');

const {
  stylesMain, stylesBar, stylesPercentageText, stylesRatingText,
  stylesSeeAllReviews, stylesBarInner, stylesBarOuter,
} = styles;

function randomDistribution(average) {
  // let averageCopy = average;
  // let resultsArr = [];
  // let sum = 0;
  // let remainder = 0;

  // first bar:
  // generate random(0,0.5)

  // for each bar
  //   generate random(0,remainder)
  //   push to array

  // return resultsArr;
  return {
    5: 0.24,
    4: 0.05,
    3: 0.09,
    2: 0.10,
    1: 0.52,
  };
}

// last bar is the remainder

const PopupHistogram = (props) => {
  const percentageArr = Object.entries(randomDistribution()).sort((x, y) => x[0] < y[0]);
  const { rating, numReviews } = props;

  return (
    <div>
      <span className={stylesRatingText}>
        {rating || ''}
        &nbsp;
        out of 5 stars
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
      <a href="http://hackreactor.com" className={stylesSeeAllReviews}>
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
  const stylesText = { fontSize: '10px !important' }
  return (
    <tr>
      <td width="50" style={stylesText}>
        <a href="http://hackreactor.com">
          {num}
          star
        </a>
      </td>
      <td className={`${stylesBar} bartest`}>
        <div className={stylesBarOuter} style={percentageRender}>
          <div className={stylesBarInner} />
        </div>
      </td>
      <td width="35" style={stylesText}>
        <span className={stylesPercentageText}>
          {`${Math.round(value * 100)}%`}
        </span>
      </td>
    </tr>
  );
};

export default PopupHistogram;
