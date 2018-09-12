const React = require('react');

const GalleryImage = props => (
  <img
    src={props.imgSrc[1]}
    className={
      `${props.attributeName} ${props.imgSrc[0].replace(/\./g, '-')}`
    }
    alt="gallery element"
  />
)

export default GalleryImage;
