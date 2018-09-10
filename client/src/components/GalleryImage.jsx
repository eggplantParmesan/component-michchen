const React = require('react');

const GalleryImage = props => (
  <img src={props.imgSrc[1]}
       className={props.attributeName + "_" + props.imgSrc[0].replace(/\./g,'-')}/>
)

export default GalleryImage;
