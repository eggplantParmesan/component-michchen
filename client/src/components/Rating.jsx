const React = require('react');
import styles from '../styles/Rating.css';
const {
  style_main,
  style_stars,
  style_arr,
  s5,
  s45,
  s4,
  s35,
  s3,
  s25,
  s2,
  s15,
  s1,
  s05,
  s0
} = styles;

import Popup from './Popup.jsx'

// const Rating = props => {
class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.hoverOn = function(){
      this.setState({ hover: true });
    };

    this.hoverOff = function(){
      this.setState({ hover: false });
    };
  }

  render () {

    /*
    let starClass = this.props.rating ?
      // prepend class with 's'
      's' +
      String(
        // round rating to the  nearest .5
        Math.round(this.props.rating * 2) / 2
      // convert to usable class name i.e. remove "."
      ).replace(/\./g,'')
    : '';
    */

    // TODO trying to merge base star style (style_stars) with
    // custom ratings (star_rating) using spread operators
    // if i get this to work, remove styling from style.css
    let star_rating = {};
    star_rating['s5']

    return (
      <div className={style_main}>
        <div id="stars"
          className={{...style_stars, ...star_rating}}
          onMouseEnter={this.hoverOn.bind(this)}
          onMouseLeave={this.hoverOff.bind(this)}
        >
          &nbsp;
          <Popup content="test" show={this.state.hover} dir="down"/>
        </div>
        <div className={style_arr}>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Rating;
