import { stylesMain, stylesBold, stylesGreen } from '../styles/Countdown.css';

const React = require('react');

class Countdown extends React.Component {
  constructor(props) {
    super(props);


    this.getRemainingTime = (endTime) => {
      const hoursLeft = endTime / 1000 / 60 / 60;
      const hours = Math.floor(hoursLeft);
      const minutes = Math.round((hoursLeft % 1) * 60);
      return `${hours} hrs ${minutes} mins`;
    }
  }

  render() {
    const { timeLeft } = this.props;

    return (
      <div className={stylesMain}>
        <span className={stylesBold}>Want it tomorrow, Sept. 12?</span>
        &nbsp;
        Order within&nbsp;
        <span className={stylesGreen}>{this.getRemainingTime(timeLeft)}</span>
        &nbsp;and choose&nbsp;
        <span className={stylesBold}>One-Day Shipping</span>
        &nbsp;at checkout.&nbsp;
        <a href="#">Details</a>
      </div>
    );
  }
}

export default Countdown;
