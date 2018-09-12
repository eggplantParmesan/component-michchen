const React = require('react');
import styles from '../styles/Countdown.css';
const {styles_main, styles_bold, styles_green} = styles;

class Countdown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    }

    this.getRemainingTime = function (endTime) {
      let hoursLeft = endTime / 1000 / 60 / 60;
      let hours = Math.floor(hoursLeft);
      let minutes = Math.round((hoursLeft % 1) * 60);
      return `${hours} hrs ${minutes} mins`;
    }

  }

  render () {
    return (<div className={styles_main}>
      <span className={styles_bold}>Want it tomorrow, Sept. 12?</span>&nbsp;
      Order within&nbsp;
      <span className={styles_green}>{this.getRemainingTime(this.props.timeLeft)}</span>&nbsp;
      and choose&nbsp;
      <span className={styles_bold}>One-Day Shipping</span>&nbsp;
      at checkout.&nbsp;
      <a href="#">Details</a>
    </div>)
  }
}

export default Countdown;
