const React = require('react');
import styles from '../styles/Selector.css';
const {style_main, style_dropdown, style_category} = styles;

const Selector = props => {

// TODO: if there's only one image, then don't render the selector
// TODO: image selector for colors

  return (
    <div className={style_main}>
      {props.images ?
        // for each category (color, size)
        Object.entries(props.images).map((x, i) =>
          <div key={i}>

            {/* category name */}
            {x[0].trim().length > 0 ?
              <span className={style_category}>
                {(x[0].charAt(0).toUpperCase() + x[0].substr(1)) + ':'}
              </span>
              : ""
            }

            {x[0].trim().length > 0 ?
              <select className={style_dropdown} onChange={props.cb}>
                {/* first default option is the text "Select" */}
                <option>Select</option>
                {/* each option in the dropdown */}
                {Object.entries(x[1]).map((y, j) =>
                  <option value={y[0]} key={j}>{y[0]}</option>)
                }
              </select>
              : ""
            }

          </div>)
        : ''
      }
    </div>
  );
}

export default Selector;
