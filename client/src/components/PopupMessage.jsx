const React = require('react');

const PopupMessage = (props) => {
  const { message } = props;

  return (
    <div>
      {message}
      <div>{props.content}</div>
    </div>
  );
};

export default PopupMessage;
