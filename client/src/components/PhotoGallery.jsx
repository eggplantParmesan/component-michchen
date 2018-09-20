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
      currentPhoto: 'https://images-na.ssl-images-amazon.com/images/I/81ddD9aqDWL._UX679_.jpg',
      photoList: [
        'https://images-na.ssl-images-amazon.com/images/I/81ddD9aqDWL._UX679_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81qSlA2twYL._SL1500_.jpg',
      ],
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
