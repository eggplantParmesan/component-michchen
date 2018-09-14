import styles from '../styles/Breadcrumb.css';

const React = require('react');
const { styleMain, styleBreadcrumb } = styles;

const Breadcrumb = (props) => {
  let categoryArr = [];
  const { data } = props;
  const { categoryName } = data;

  if (categoryName) {
    categoryArr = categoryName.split('\n');
  }

  return (
    <div id="breadcrumb" className={styleMain}>
      {categoryName
        ? categoryArr.map((x, i) => (
          <span key={x + Math.round(Math.random() * 9)}>
            <a href="http://hackreactor.com" className={styleBreadcrumb}>
              { x }
              &nbsp;
            </a>
            { /* if not the last category, append a ">" */ }
            { i < categoryArr.length - 1 ? '>' : '' }
            &nbsp;
          </span>))
        : ''
      }
    </div>
  );
};

export default Breadcrumb;
