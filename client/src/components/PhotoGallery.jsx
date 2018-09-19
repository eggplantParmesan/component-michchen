import React from 'react';
import PhotoListItem from './PhotoListItem.jsx';
import MainPhoto from './MainPhoto.jsx';
// import MainPhotoTest from './MainPhotoTest.jsx';
import PhotoList from './PhotoList.jsx';
import styles from '../styles/photoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/20800148_884991911705244_8847631967476084829_n.jpg?_nc_cat=0&oh=f65b967c668c091ea0b530193175533d&oe=5C1E5825',
      photoList: [
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/20800148_884991911705244_8847631967476084829_n.jpg?_nc_cat=0&oh=f65b967c668c091ea0b530193175533d&oe=5C1E5825',
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1958562_232816943589414_1989928331_n.jpg?_nc_cat=0&oh=4b14fc7bca42f9aa7f451722d2aebe1e&oe=5C27D523',
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10306256_330658910471883_1485038244507827308_n.jpg?_nc_cat=0&oh=70e12fd4f4839e4be287cf09bcfba61c&oe=5C2D6494',
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(imgURL) {
    this.setState({
      currentPhoto: `${imgURL}`,
      magnifyOn: false,
    });
  }

  render() {
    const { photoList, currentPhoto } = this.state;
    return (
      <div className={styles.photoGallery}>
        <div className={styles.photoList}>
          <PhotoList handleClick={this.handleClick} photos={photoList} />
        </div>
        <div className={styles.mainPhoto}>
          <MainPhoto curr={currentPhoto} />
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
