const React = require('react');
import styles from '../styles/Rating.css';
const {wrapper} = styles;

const Rating = props => (
  <div className={wrapper}>
    [{props.rating} stars]
  </div>
)

export default Rating;
