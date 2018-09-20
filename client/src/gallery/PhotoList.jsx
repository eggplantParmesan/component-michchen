import React from 'react';
import styles from '../styles/photoList.css';
import PhotoListItem from './PhotoListItem.jsx';

const PhotoList = ({ photos, handleClick }) => {
  return (
    <div className={ styles.photoList }>
      <div>
        {photos.map( photo => <PhotoListItem key={photo} changePhoto={handleClick} photoURL={photo}/>)}
      </div>
    </div>
  );
}

export default PhotoList;
