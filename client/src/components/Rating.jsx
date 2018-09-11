const React = require('react');
import styles from '../styles/Rating.css';
const {style_main, style_stars, style_arr} = styles;

const Rating = props => {
  // debugger
  // style_stars == "_1IDAacgyEfDzfGDsGpsdqs"
  return (
    <div className={style_main}>
      <div className={style_stars}>
        &nbsp;
      </div>
      <div className={style_arr}>
        &nbsp;
      </div>
    </div>
  );
}

export default Rating;
