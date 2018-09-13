import styles from '../styles/Rating.css';
import Popup from './Popup.jsx'

const React = require('react');
const {
  styleMain, styleStars, styleArr, s5, s45, s4, s35, s3, s25, s2, s15, s1, s05, s0
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

    let { hover } = this.state;
    let { rating } = this.props;

    if (rating !== undefined && !isNaN(rating)) {
      // round to nearest .5
      rating = Math.round(rating * 2) / 2;
      // remove .s so it's a usable class name
      rating = String(rating).replace(/\./g, '');
    }

    return (
      <div className={styleMain}>
        <div
          id="stars"
          className={`${styleStars} s${rating}`}
          onMouseEnter={this.hoverOn.bind(this)}
          onMouseLeave={this.hoverOff.bind(this)}
        >
          &nbsp;
          <Popup content="test" show={hover} dir="down" />
        </div>
        <div className={styleArr}>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Rating;
