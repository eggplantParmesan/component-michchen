import { stylesPopupMessage, stylesPopupMessageX } from '../styles/Popup.css';

const React = require('react');

const PopupMessage = ({ content, clickCb }) => (
  /* OnKeyPress in div below: If user presses 88 (X) or 27 (ESC) on the keyboard, clickCb
  (close popup) is called. The onKeyPress accessibility feature is required by ESLint */
  <div>
    <div className={stylesPopupMessage}>{content}</div>
    <div
      className={stylesPopupMessageX}
      onClick={() => clickCb()}
      onKeyPress={e => ((e.which === 88 || e.which === 27) ? clickCb() : '')}
      role="button"
      tabIndex={0}
    >
      x
    </div>
  </div>
);

export default PopupMessage;
