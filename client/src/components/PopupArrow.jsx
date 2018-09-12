const React = require('react');
import styles from '../styles/Popup.css';

const {
  styles_arrow_up,
  styles_arrow_up_border,
  styles_arrow_right,
  styles_arrow_right_border,
  styles_arrow_down,
  styles_arrow_down_border,
  styles_arrow_left,
  styles_arrow_left_border,
} = styles;

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
  marginLeft: '4px',
  borderTop: '1px solid transparent',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  position: 'absolute',
  top: '0px',
  left: '50%',
  borderWidth: '11px',
  zIndex: '99',
}

const PopupArrow = props => {
  let styles_arrow_dir = Object.assign({}, styles_arrow);
  let styles_arrow_border_dir = Object.assign({}, styles_arrow_border);

  let dir;
  if (props.dir === 'top') {
    dir = 'bottom';
  } else if (props.dir === 'right') {
    dir = 'left';
  } else if (props.dir === 'bottom') {
    dir = 'top';
  } else if (props.dir === 'left') {
    dir = 'right';
  }

  console.log(dir);

  // styles_arrow_dir[`border${dir_upper}Color`] = '#FFFFFF !important';
  styles_arrow_dir[`border${dir}Color`] = '#FFFFFF !important';
  styles_arrow_border_dir[`borderTopColor`] = '#000000 !important';

  return (
    <div style={styles_arrow_border_dir}>
      <div style={styles_arrow_dir}/>
    </div>
  );
}

export default PopupArrow;
