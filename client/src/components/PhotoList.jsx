import React from 'react';
import styles from '../styles/photoList.css';
import PhotoListItem from './PhotoListItem.jsx';

const PhotoList = ({ photos, handleClick }) => (
  <React.Fragment>
    {photos.map(photo => (
      <PhotoListItem
        key={photo}
        changePhoto={handleClick}
        photoURL={photo}
      />
    ))}
  </React.Fragment>
);

export default PhotoList;
