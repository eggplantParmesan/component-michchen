const React = require('react');
import GalleryImage from './GalleryImage.jsx'
import styles from '../styles/Gallery.css';
const { style_main } = styles;

const Gallery = props => {
  return (
  <div className={style_main}>
    {props.images ?
      <div>
      {Object.entries(props.images).map((attr, i) =>
        <div key={i}>
          {Object.entries(attr[1]).map((imgArr, j) =>
            <GalleryImage imgSrc={imgArr}
                 attributeName={attr[0]}
                 key={j}
            />
          )}
        </div>
      )}
      </div>
      : ''
    }
    Gallery current: ({props.cur})<br/>
  </div>
);}


export default Gallery;
