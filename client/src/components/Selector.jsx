const React = require("react");

class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.images ?
          Object.entries(this.props.images).map((x, i) => <div key={i}>
            {x[0].charAt(0).toUpperCase() + x[0].substr(1)}:<br/>
            <select onChange={this.props.cb}>
              {Object.entries(x[1]).map((y, j) =>
                <option value={y[0]} key={j}>{y[0]}</option>)
              }
            </select>
        </div>)
          : "no customization options"}
      </div>
    );
  }
}

export default Selector;
