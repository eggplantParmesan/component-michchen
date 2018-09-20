import {
  styleMain, styleStars, styleArr, styleStarsImg, // s[number] are styles for each rating, e.g. 3.5 --> s35
} from '../styles/Rating.css';
import Popup from './Popup.jsx';

const React = require('react');

// const Rating = props => {
class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  hoverOn() {
    // console.log('hover on');
    this.setState({ hover: true });
  }

  hoverOff() {
    // console.log('hover off');
    this.setState({ hover: false });
  }

  render() {
    // TODO trying to merge base star style (styleStars) with
    // custom ratings (star_rating) using spread operators
    // if i get this to work, remove styling from style.css

    const { hover } = this.state;
    const { rating, numReviews } = this.props;

/*    let ratingClassName = '';
    // if (rating !== undefined && !Number.isNaN(rating)) {
    if (rating && Number(rating)) {
      // round to nearest .5
      ratingClassName = Math.round(rating * 2) / 2;
      // remove .s so it's a usable class name
      ratingClassName = String(ratingClassName).replace(/\./g, '');
    }
*/
    let numStars = 0;

    if (rating !== undefined && !Number.isNaN(rating)) {
      if (rating && Number(rating)) {
        numStars = Math.round(rating);
      };
    };
    return (
      <div
        className={styleMain}
        onMouseEnter={this.hoverOn.bind(this)}
        onMouseLeave={this.hoverOff.bind(this)}
      >

        <div id="stars">
          <img src={`https://s3-us-west-1.amazonaws.com/mattminwoolee-checkout/images/${numStars}-star.png`} className={styleStarsImg} />
          <Popup content="ratings" show={hover} dir="down" rating={rating} numReviews={numReviews} />
        </div>
      </div>
    );
  }
}

export default Rating;
