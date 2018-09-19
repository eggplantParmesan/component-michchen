import React from 'react';
import styles from '../styles/mainPhoto.css';

class MainPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      x: 0,
      y: 0,
      mouseOnImage: false,
    };
    this.openZoom = this.openZoom.bind(this);
    this.closeZoom = this.closeZoom.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
  }

  openZoom (event) {
    this.setState({
      mouseOnImage: true,
    });
  }

  closeZoom() {
    this.setState({
      mouseOnImage: false,
    });
  }

  setCoordinates(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    // console.log('x: ', x);
    // console.log('y: ', y);
    let boxDimension; // in px for both width and height for the blue box
    let mainFrame;
    let mainFrameBottomMostY;
    let mainFrameLeftMostX;
    let mainFrameRightMostX;
    let mainFrameTopMostY;

    if (this.myRef.current) {
      mainFrame = this.myRef.current.getBoundingClientRect();
      mainFrameRightMostX = mainFrame.right;
      mainFrameLeftMostX = mainFrame.left;
      mainFrameBottomMostY = mainFrame.bottom;
      mainFrameTopMostY = mainFrame.top;
      boxDimension = mainFrame.width / 2.5; // 2.5 was chosen arbitrarily
    }

    const styledBlueBox = {
      width: `${boxDimension}px`,
      height: `${boxDimension}px`,
    };
    console.log(boxDimension);

    const { x, y, mouseOnImage } = this.state;

    // Setting up y bounds for blue box
    if (y < mainFrameBottomMostY + 1 && y > mainFrameBottomMostY - boxDimension / 2) {
      styledBlueBox.top = `${mainFrameBottomMostY - boxDimension}px`;
    } else if (y < mainFrameTopMostY + boxDimension / 2 && y > mainFrameTopMostY - 1) {
      styledBlueBox.top = `${mainFrameTopMostY}px`;
    } else {
      styledBlueBox.top = `${y - boxDimension / 2}px`;
    }
    // Setting up x bounds for blue box
    if (x > mainFrameLeftMostX - 1 && x < mainFrameLeftMostX + boxDimension / 2) {
      styledBlueBox.left = `${mainFrameLeftMostX}px`;
    } else if (x > mainFrameRightMostX - boxDimension / 2 && x < mainFrameRightMostX + 1) {
      styledBlueBox.left = `${mainFrameRightMostX - boxDimension}px`;
    } else {
      styledBlueBox.left = `${x - boxDimension / 2}px`;
    }

    // Set position coordinates for zoom Photo
    // subtract 190 to get left corner of mouse ref
    const newX = -(x - mainFrameLeftMostX) + 200 - (boxDimension / 2);
    // subtract 190 to get left corner of mouse ref
    const newY = -(y - mainFrameTopMostY) + 250 - (boxDimension / 2);
    // then subtract another 108 and 19 because that is the document's mouse ref

    const styledImg = {
      backgroundImage: `url(${this.props.curr})`,
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `${newX}px ${newY}px`, // the higher the value, the more left and up
      objectFit: 'contain',
      transform: 'scale(2.9)',
      width: '90vmin',
      height: '90vmin',
      // display: 'block !important',
      // display zoom only if mouseOnImage is true
      display: `${!mouseOnImage ? 'none' : 'block'}`,
    };

    // display blueBox only if mouseOnImage is true
    if (!mouseOnImage) {
      styledBlueBox.display = 'none';
    } else {
      styledBlueBox.display = 'block';
    }

    return (
      <div className={styles.mainPhoto}>
        <div
          ref={this.myRef}
          className={styles.mainFrame}
          onMouseEnter={this.openZoom}
          onMouseLeave={this.closeZoom}
          onMouseMove={this.setCoordinates}
        >
          <div className={styles.blueBox} style={styledBlueBox}><img src="https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB211431200_.gif"/></div>
          <img src={this.props.curr} />
        </div>
        <div className={styles.zoomFrame}>
          <img style={styledImg} />
        </div>
      </div>
    );
  };
}

export default MainPhoto;
