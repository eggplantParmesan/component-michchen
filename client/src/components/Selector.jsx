const React = require('react');
import styles from '../styles/Selector.css';
const {style_main, style_dropdown, style_category} = styles;

const Selector = () => (
  <div className={style_main}>
    {this.props.images ?
      // for each category (color, size)
      Object.entries(this.props.images).map((x, i) =>
        <div key={i}>
          {/* category name */}
          <span className={style_category}>{x[0].charAt(0).toUpperCase() + x[0].substr(1)}:</span>

          {/* dropdown select */}
          <select className={style_dropdown} onChange={this.props.cb}>
            {/* first default option is the text "Select" */}
            <option>Select</option>

            {/*  */}
            {Object.entries(x[1]).map((y, j) =>
              <option value={y[0]} key={j}>{y[0]}</option>)
            }
          </select>

        </div>)
      : ''
    }
  </div>
);

export default Selector;
