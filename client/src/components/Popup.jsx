import styles from '../styles/Popup.css';
import Arrow from './PopupArrow.jsx';
import PopupHistogram from './PopupHistogram.jsx';
import PopupMessage from './PopupMessage.jsx';

const React = require('react');

const { stylesMain, stylesPopupBox } = styles;

const Popup = (props) => {
  const {
    dir, show, content, rating, numReviews, clickCb,
  } = props;

  let popupSize;

  if (content === 'ratings') {
    // histogram
    popupSize = {
      width: '240px',
      height: '200px',
    };
  } else {
    // message
    popupSize = {
      width: '425px',
      height: '70px',
      top: '-84px',
      left: '-132%',
    };
  }

  // dir: up/down/left/right

  return (
    <div
      style={popupSize}
      className={`${stylesMain} popup${dir} ${(show ? '' : 'hide')}`}
    >

      <Arrow dir={dir} />
      <div className={stylesPopupBox}>
        {
          (content === 'ratings')
            ? <PopupHistogram rating={rating} numReviews={numReviews} />
            : <PopupMessage content={content} clickCb={clickCb} />
        }
      </div>
    </div>
  );
};

export default Popup;
