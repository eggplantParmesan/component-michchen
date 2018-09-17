import styles from '../styles/Rating.css';
import Popup from './Popup.jsx'

const React = require('react');
const {
  styleMain, styleStars, styleArr,
// s[number] are styles for each rating, e.g. 3.5 --> s35
  s5, s45, s4, s35, s3, s25, s2, s15, s1, s05, s0
} = styles;

// const Rating = props => {
class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  hoverOn() {
    this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  render() {
    // TODO trying to merge base star style (styleStars) with
    // custom ratings (star_rating) using spread operators
    // if i get this to work, remove styling from style.css

    const { hover } = this.state;
    let { rating, numReviews } = this.props;

    let ratingClassName = '';
    if (rating !== undefined && !Number.isNaN(rating)) {
      // round to nearest .5
      ratingClassName = Math.round(rating * 2) / 2;
      ratingClassName = String(ratingClassName).replace(/\./g, '');
    }
    // remove .s so it's a usable class name

    return (
      <div
        className={styleMain}
        onMouseEnter={this.hoverOn.bind(this)}
        onMouseLeave={this.hoverOff.bind(this)}
      >
        <div
          id="stars"
          className={`${styleStars} s${ratingClassName}`}
        >
          &nbsp;
          <Popup content="ratings" show={hover} dir="down" rating={rating} numReviews={numReviews} />
        </div>
        <div className={styleArr}>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Rating;
