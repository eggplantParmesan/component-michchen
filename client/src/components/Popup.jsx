import styles from '../styles/Popup.css';
import Arrow from './PopupArrow.jsx';

const React = require('react');
const { stylesMain, stylesPopup } = styles;


const Popup = props => (
  <div className={`${stylesMain} ${(props.show ? '' : 'hide')}`}>
    <Arrow dir="top" />
    <div className={stylesPopup}>
      {props.content}
    </div>
  </div>
);

export default Popup;
