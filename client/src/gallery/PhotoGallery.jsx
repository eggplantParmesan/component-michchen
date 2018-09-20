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
      currentPhoto: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
      photoList: ['https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cvWFxhk8ahH30zJ0UmbAgamdpY4lpjFkmP2daxX2aajUIOq3',
      'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg'],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(imgURL) {
    this.setState({
      currentPhoto: `${imgURL}`,
      magnifyOn: false,
    })
  }

  render() {
    return(
      <div className={ styles.photoGallery } >
        <div className={ styles.photoList }>
          <PhotoList handleClick={this.handleClick} photos={ this.state.photoList } />
        </div>
        <div>
          <div className={ styles.mainPhoto }>
            <MainPhoto curr={ this.state.currentPhoto }/>
          </div>
          <div className={ styles.rollOverText }>
            Roll over image to zoom in
          </div>
        </div>
      </div>
    );
  };
};

export default PhotoGallery;