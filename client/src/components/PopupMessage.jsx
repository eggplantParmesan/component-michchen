const React = require('react');

const PopupMessage = (props) => {
  const { message } = props;

  return (
    <div>
      {message}
      <div>x</div>
    </div>
  );
};

export default PopupMessage;
