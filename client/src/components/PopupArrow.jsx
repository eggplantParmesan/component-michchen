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
  left: '50%',
  marginLeft: '-10px !important',
};

/*
  #ProductInfo .popupArrow_down { border-bottom-color: #ffffff !important;}
  #ProductInfo .popupArrowBorder_down {
    top:-21px;
    left: 50%;
    margin-left: -10px !important;
    border-bottom-color: #000000 !important;
  }

  #ProductInfo .popupArrow_up { border-top-color: #ffffff !important;}
  #ProductInfo .popupArrowBorder_up {
    bottom: -23px;
    left: 50%;
    margin-left: -10px !important;
    border-top-color: #000000 !important;
  }
  */


const PopupArrow = ({ dir }) => (
  <div style={stylesArrowBorder} className={`popupArrowBorder_${dir}`}>
    <div style={stylesArrow} className={`popupArrow_${dir}`} />
  </div>
);

export default PopupArrow;
