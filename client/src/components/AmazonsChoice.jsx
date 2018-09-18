import Popup from './Popup.jsx';
import {
  styleAmazonsChoiceHolder, styleAmazonsChoice,
  styleAmazonsChoiceOrange, styleAmazonsChoicePopup,
} from '../styles/AmazonsChoice.css';

const React = require('react');

class AmazonsChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.hoverOn = () => {
      // console.log('hover ON');
      this.setState({ hover: true });
    };

    this.hoverOff = () => {
      // console.log('hover OFF');
      this.setState({ hover: false });
    };

    this.clickCb = () => {
      this.setState({ hover: false });
    };
  }

  render() {
    const { hover } = this.state;
    return (
      <div
        className={styleAmazonsChoiceHolder}
        onMouseEnter={this.hoverOn.bind(this)}
        onMouseLeave={this.hoverOff.bind(this)}
      >
        <div className={styleAmazonsChoice}>
          Amazon&apos;s&nbsp;
          <span className={styleAmazonsChoiceOrange}>Choice</span>
        </div>
        <Popup
          className={styleAmazonsChoicePopup}
          content="Amazon's Choice recommends highly rated, well-priced products available to ship immediately."
          show={hover}
          dir="up"
          clickCb={this.clickCb}
        />
      </div>
    );
  }
}

export default AmazonsChoice;
