const React = require('react');
import styles from '../styles/SelectorImage.css';
const {styles_main, styles_color, styles_variation_name_holder, styles_variation_name} = styles;

const SelectorImage = props => {
  return (
    <div>
      <div className={styles_variation_name_holder}>
        <span className={styles_variation_name}>Color:</span> {props.selected_variation}
      </div>
      {Object.entries(props.images).map((x,i) =>
        <SelectorImageOption data={x} key={i} cb={props.cb} selected_variation={props.selected_variation}/>
      )}
    </div>
  );
}

const SelectorImageOption = props => {

  // converts color to a css-friendly format, e.g. "Alice Blue" --> "aliceblue"
  let selectedColorCSS = props.data[0].replace(/ /g, '').toLowerCase();
  // console.log(props.data[0], props.selected_variation);

  return (
  <div
    className={styles_main + " " + (props.selected_variation === props.data[0] ? "selectedVariation" : "")}
    onClick={props.cb}
    data={props.data[0]}
  >
    <div className={styles_color} style={{backgroundColor: selectedColorCSS}} data={props.data[0]}>&nbsp;</div>
  </div>
)}





export default SelectorImage;
