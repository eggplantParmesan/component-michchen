const React = require('react');
import styles from '../styles/Popup.css';
import Arrow from './PopupArrow.jsx';
const {styles_main, styles_popup} = styles;


const Popup = props => {
  return (
    <div className={styles_main + ' ' + (props.show ? '' : 'hide')}>
      {/* top right bottom left */}
      <Arrow dir="top"/>
      <div className={styles_popup}>
        {props.content}
      </div>
    </div>
  );
}

export default Popup;
