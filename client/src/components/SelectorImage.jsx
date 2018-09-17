import styles from '../styles/SelectorImage.css';

const React = require('react');

const {
  stylesMain, stylesColor, stylesVariationNameHolder, stylesVariationName, stylesSelectedVariation
} = styles;

const SelectorImage = (props) => {
  const { selectedVariation, images, cb } = props;

  return (
    <div>
      <div className={stylesVariationNameHolder}>
        <span className={stylesVariationName}>Color:</span>
        &nbsp;
        <span className={stylesSelectedVariation}>{ selectedVariation }</span>
      </div>
      {
        Object.entries(images).map(x => (
          <SelectorImageOption
            data={x}
            key={x}
            cb={cb}
            selectedVariation={selectedVariation}
          />
        ))
      }
    </div>
  );
};

const SelectorImageOption = (props) => {
  const { selectedVariation, data, cb } = props;
  return (
    <div
      className={stylesMain + ' ' + (selectedVariation === data[0] ? 'selectedVariation' : '')}
      onClick={cb}
      data={data[0]}
    >
      <div
        style={{ backgroundColor: data[0].replace(/ /g, '').toLowerCase() }}
        className={stylesColor}
        data={data[0]}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default SelectorImage;
