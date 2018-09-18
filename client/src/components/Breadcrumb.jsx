import { stylesMain, stylesBreadcrumb } from '../styles/Breadcrumb.css';

const React = require('react');

const Breadcrumb = ({ data }) => {
  let categoryArr = [];

  if (data.categoryName) {
    categoryArr = data.categoryName.split('\n');
  }

  return (
    <div id="breadcrumb" className={stylesMain}>
      {data.categoryName
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
