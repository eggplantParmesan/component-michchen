import GalleryImage from './GalleryImage.jsx';
import { styleMain } from '../styles/Gallery.css';

const React = require('react');

const Gallery = ({ images, currentImage }) => (
  <div className={styleMain}>
    {images
      ? (
        <div>
          {Object.entries(images).map(attr => (
            <div key={attr}>
              {Object.entries(attr[1]).map(imgArr => (
                <GalleryImage
                  imgSrc={imgArr}
                  attributeName={attr[0]}
                  key={imgArr}
                />
              ))}
            </div>))}
        </div>)
      : ''
  }
  Gallery current: (
    { currentImage }
  )
    <br />
  </div>
);

export default Gallery;
