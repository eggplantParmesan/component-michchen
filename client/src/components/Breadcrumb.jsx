import styles from '../styles/Breadcrumb.css';

const { stylesMain, stylesBreadcrumb } = styles;
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
    <div id="breadcrumb" className={stylesMain}>
      {categoryName
        ? categoryArr.map((x, i) => (
          <span key={x + i}>
            <a href="#" className={stylesBreadcrumb}>
              {x}
              &nbsp;
            </a>
            {/* if not last in the list, append a ">" */}
            {i < categoryArr.length - 1 ? '>' : ''}
            &nbsp;
          </span>))
        : ''
      }
    </div>
  );
};

export default Breadcrumb;
