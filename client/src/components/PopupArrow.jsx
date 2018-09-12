const React = require('react');
import styles from '../styles/Popup.css';

let styles_arrow = {
  width: '0px',
  height: '0px',
  borderTop: '1px solid transparent',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  position: 'relative',
  left: '-12px',
  top: '-12px',
  borderWidth: '12px'
}

let styles_arrow_border = {
  width: '0px',
  height: '0px',
  borderTop: '1px solid transparent',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  position: 'absolute',
  borderWidth: '11px',
  zIndex: '99',
}

const PopupArrow = props => {
  return (
    <div style={styles_arrow_border} className={'popupArrowBorder_' + props.dir}>
      <div style={styles_arrow} className={'popupArrow_' + props.dir}/>
    </div>
  );
}

export default PopupArrow;
