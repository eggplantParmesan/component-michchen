const React = require('react');

const GalleryImage = (props) => {
  const { imgSrc, attributeName } = props;
  return (
    <img
      src={imgSrc[1]}
      className={
        `${attributeName} ${imgSrc[0].replace(/\./g, '-')}`
      }
      alt="gallery element"
    />
  );
};

export default GalleryImage;
