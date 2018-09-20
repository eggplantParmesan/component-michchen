import { stylesPopupMessage, stylesPopupMessageX } from '../styles/Popup.css';

const React = require('react');

const PopupMessage = ({ content, clickCb }) => {
  return (
    <React.Fragment>
      <div className={stylesPopupMessage}>
        {content}
      </div>
      <div
        className={stylesPopupMessageX}
        onClick={() => clickCb()}
        role="button"
        tabIndex={0}
      >
        x
      </div>
    </React.Fragment>
  );
}

export default PopupMessage;
