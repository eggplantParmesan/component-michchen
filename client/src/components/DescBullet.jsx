const React = require("react");
import styles from '../styles/DescBullet.css';
const {bullet} = styles;

const DescBullet = props => <li className={bullet}>{props.text}</li>;

export default DescBullet;
