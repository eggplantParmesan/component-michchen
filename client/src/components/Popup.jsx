import styles from '../styles/Popup.css';
import Arrow from './PopupArrow.jsx';
import PopupHistogram from './PopupHistogram.jsx';
import PopupMessage from './PopupMessage.jsx';

const React = require('react');

const { stylesMain, stylesPopupBox } = styles;


const Popup = (props) => {
  const {
    dir, show, content, rating, numReviews,
  } = props;

  return (
    <div className={`${stylesMain} popup${dir} ${(show ? '' : 'hide')}`}>

      <Arrow dir={dir} />
      <div className={stylesPopupBox}>
        {
          (content === 'ratings')
            ? <PopupHistogram rating={rating} numReviews={numReviews} />
            : <PopupMessage message={content} />
        }
      </div>
    </div>
  );
};

export default Popup;
