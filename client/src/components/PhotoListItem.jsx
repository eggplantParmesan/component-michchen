import React from 'react';
import styles from '../styles/photoListItem.css';

const PhotoListItem = ({ photoURL, changePhoto }) => (
  <div className={styles.photoListItem}>
    <div>
      <img
        onMouseEnter={() => changePhoto(photoURL)}
        className={styles.img}
        src={`${photoURL}`}
        alt="something"
      />
    </div>
  </div>
);

export default PhotoListItem;
