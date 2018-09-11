const React = require('react');
import styles from '../styles/Breadcrumb.css';

const Breadcrumb = props => {
// console.log(styles);
  return (
  <div id="breadcrumb">
    {props.data.category_name ?
      (<a className={styles.breadcrumb} href={props.data.category_url}>{props.data.category_name}</a>)
       :
      'no category defined'
    }
  </div>
)};

export default Breadcrumb;
