const React = require('react');
import styles from '../styles/Breadcrumb.css';
const {style_main, style_breadcrumb} = styles;

const Breadcrumb = props => {
  let category_arr = [];

  if (props.data.category_name) {
    category_arr = props.data.category_name.split('\n');
  }

  return (
    <div id="breadcrumb" className={style_main}>
      {props.data.category_name ?
        category_arr.map((x, i) =>
          <span key={i}>
            <a href="#" className={style_breadcrumb}>
              {x}&nbsp;
            </a>
            {i < category_arr.length - 1 ? '>' : ''}&nbsp;
          </span>
        )
         :
        ''
      }
    </div>
  );
}

export default Breadcrumb;
