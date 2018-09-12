const React = require('react');
import styles from '../styles/Rating.css';
const {style_main, style_stars, style_arr} = styles;

import Popup from './Popup.jsx'

const Rating = props => {
  let starClass = '';

  if (props.rating) {
    // round to nearest .5
    starClass = Math.round(props.rating * 2) / 2;

    // convert to usable class name i.e. remove "."
    starClass = 's' + String(starClass).replace(/\./g,'');
  }

  return (
    <div className={style_main}>
      <div id="stars" className={starClass + ' ' + style_stars}>
        &nbsp;
        <Popup content="test" dir="down"/>
      </div>
      <div className={style_arr}>
        &nbsp;
      </div>
    </div>
  );
}

export default Rating;
