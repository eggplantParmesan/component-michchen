// import styles from '../styles/Popup.css';

const React = require('react');

const stylesArrow = {
  width: '0px',
  height: '0px',
  borderTop: '1px solid transparent',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  position: 'relative',
  left: '-12px',
  top: '-12px',
  borderWidth: '12px',
};

const stylesArrowBorder = {
  width: '0px',
  height: '0px',
  borderTop: '1px solid transparent',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  position: 'absolute',
  borderWidth: '11px',
  zIndex: '99',
};

const PopupArrow = (props) => {
  const { dir } = props;
  return (
    <div style={stylesArrowBorder} className={`popupArrowBorder_${dir}`}>
      <div style={stylesArrow} className={`popupArrow_${dir}`} />
    </div>
  );
};

export default PopupArrow;
