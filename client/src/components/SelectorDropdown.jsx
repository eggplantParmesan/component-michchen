const React = require('react');
import styles from '../styles/SelectorDropdown.css';
const { styleMain, styleDropdown, styleCategory } = styles;

const SelectorDropdown = (props) => {
  const { images, cb } = props;

  return (
    <div className={styleMain}>
      {images ? (
        <div>
          { /* category name */ }
          {<span className={styleCategory}>Size:</span>}

          {/* if there is more than one option, render dropdown. otherwise render empty string */}

          <span>
            <select className={styleDropdown} onChange={cb}>

              { /* first default option is the text "Select" */ }
              <option>Select</option>
              { /* each option in the dropdown */ }
              {Object.entries(images).map(x => <option value={x[0]} key={x}>{ x[0] }</option>)}
            </select>
            <span />
          </span>
        </div>
      )
        : ''
      }
    </div>
  );
};

export default SelectorDropdown;
