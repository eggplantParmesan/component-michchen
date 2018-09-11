const React = require('react');
import styles from '../styles/Selector.css';
const {style_wrapper, style_dropdown, style_category} = styles;

class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style_wrapper}>
        {this.props.images ?
          Object.entries(this.props.images).map((x, i) =>
            <div key={i}>
              <span className={style_category}>{x[0].charAt(0).toUpperCase() + x[0].substr(1)}:</span>
              <select className={style_dropdown} onChange={this.props.cb}>
                <option>Select</option>
                {Object.entries(x[1]).map((y, j) =>
                  <option value={y[0]} key={j}>{y[0]}</option>)
                }
              </select>
            </div>)
          : 'no customization options'}
      </div>
    );
  }
}

export default Selector;
