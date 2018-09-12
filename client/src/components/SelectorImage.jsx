import styles from '../styles/SelectorImage.css';

const React = require('react');

const {
  stylesMain, stylesColor, stylesVariationNameHolder, stylesVariationName
} = styles;

const SelectorImage = props => (
  <div>
    <div className={stylesVariationNameHolder}>
      <span className={stylesVariationName}>Color:</span>
      &nbsp;
      { props.selectedVariation }
    </div>
    {
      Object.entries(props.images).map(x => (
        <SelectorImageOption
          data={x}
          key={x}
          cb={props.cb}
          selectedVariation={props.selectedVariation}
        />
      ))
    }
  </div>
);

const SelectorImageOption = props => (
  <div
    className={stylesMain + ' ' + (props.selectedVariation === props.data[0] ? 'selectedVariation' : '')}
    onClick={props.cb}
    data={props.data[0]}
  >
    <div
      style={{ backgroundColor: props.data[0].replace(/ /g, '').toLowerCase() }}
      className={stylesColor}
      data={props.data[0]}
    >
      &nbsp;
    </div>
  </div>
);

export default SelectorImage;
