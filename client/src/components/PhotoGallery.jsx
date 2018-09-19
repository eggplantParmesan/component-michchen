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
      currentPhoto: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1958562_232816943589414_1989928331_n.jpg?_nc_cat=0&oh=4b14fc7bca42f9aa7f451722d2aebe1e&oe=5C27D523',
      photoList: [
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1958562_232816943589414_1989928331_n.jpg?_nc_cat=0&oh=4b14fc7bca42f9aa7f451722d2aebe1e&oe=5C27D523',
        'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg'],
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
