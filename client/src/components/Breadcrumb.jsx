const React = require('react');
import styles from '../styles/Breadcrumb.css';
const {style_main} = styles;

const Breadcrumb = props => (
  <div id="breadcrumb">
    {props.data.category_name ?
      (<a className={style_main} href={props.data.category_url}>{props.data.category_name}</a>)
       :
      'no category defined'
    }
  </div>
);

export default Breadcrumb;
