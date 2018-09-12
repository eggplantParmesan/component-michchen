const React = require('react');
import styles from '../styles/SelectorImage.css';
const {styles_main, styles_thumb} = styles;

const SelectorImage = props => {
  console.log(props.images);
  return (
    <div>
      {Object.entries(props.images).map((x,i) =>
        <SelectorImageOption data={x} key={i}/>
      )}
    </div>
  );
}

const SelectorImageOption = props => (
  <div className={styles_main}>
    <img className={styles_thumb} src={props.data[1][0]}/>
  </div>
)





export default SelectorImage;
