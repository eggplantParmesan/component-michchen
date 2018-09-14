import styles from '../styles/DescBullet.css';

const React = require("react");
const { bullet } = styles;

const DescBullet = (props) => {
  const { text } = props;
  return (<li className={bullet}>{ text }</li>);
};

export default DescBullet;
