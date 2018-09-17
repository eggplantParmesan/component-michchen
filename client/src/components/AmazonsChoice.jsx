import Popup from './Popup.jsx';

const React = require('react');

class AmazonsChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  hoverOn() {
    console.log('hover ON');
    this.setState({ hover: true });
  }

  hoverOff() {
    console.log('hover OFF');
    this.setState({ hover: false });
  }

  render() {
    return (
      <div>
        // <div className={styleAmazonsChoice}>
        //   Amazon&apos;s&nbsp;
        //   <span className={styleAmazonsChoiceOrange}>Choice</span>
        // </div>
        // <Popup
        //   className={`popup${dir} ${(show ? '' : 'hide')}`}
        //   dir="up"
        //   show="true"
        //   content={this.props.content}
        //   onMouseEnter={this.hoverOn.bind(this)}
        //   onMouseLeave={this.hoverOff.bind(this)}
        // />
        stuff
      </div>
    );
  }
}

export default AmazonsChoice;
