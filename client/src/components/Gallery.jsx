const React = require('react');
import GalleryImage from './GalleryImage.jsx'

const Gallery = props => {
  return (
  <div style={props.styles}>
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
      : 'no images'
    }
    Gallery current: ({props.cur})<br/>
  </div>
);}


export default Gallery;
