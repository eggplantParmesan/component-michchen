import styles from '../styles/DescBullet.css';

const React = require("react");
const { bullet } = styles;

const DescBullet = props => <li className={bullet}>{ props.text }</li>;

export default DescBullet;
