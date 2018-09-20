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
    }
    this.openZoom = this.openZoom.bind(this);
    this.closeZoom = this.closeZoom.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
  }

  openZoom (event) {
    this.setState({
      mouseOnImage: true,
    })
  }

  closeZoom () {
    this.setState({
      mouseOnImage: false,
    })
  }

  setCoordinates (event) {
    console.log('setting coordinate')
    var x = event.clientX;
    var y = event.clientY;
    this.setState({
      x: x,
      y: y,
    })
  }

  render() {
    console.log('x: ', this.state.x);
    console.log('y: ', this.state.y);
    var boxDimension; // in px for both width and height for the blue box 
    var mainFrame;
    var mainFrameBottomMostY;
    var mainFrameLeftMostX;
    var mainFrameRightMostX;
    var mainFrameTopMostY;
 
    if (this.myRef.current) {
      mainFrame = this.myRef.current.getBoundingClientRect();
      mainFrameRightMostX = mainFrame.right;
      mainFrameLeftMostX = mainFrame.left;
      mainFrameBottomMostY = mainFrame.bottom;
      mainFrameTopMostY = mainFrame.top;
      boxDimension = mainFrame.width/2.5; // 2.5 was chosen arbitrarily
    }
    
    const styledBlueBox = {
      width: `${boxDimension}px`,
      height: `${boxDimension}px`,
    }

    // Setting up y bounds for blue box
    if (this.state.y < mainFrameBottomMostY+1 && this.state.y > mainFrameBottomMostY-boxDimension/2){
      styledBlueBox.top = `${mainFrameBottomMostY-boxDimension}px`;
    } else if (this.state.y < mainFrameTopMostY+boxDimension/2 && this.state.y > mainFrameTopMostY-1){
      styledBlueBox.top = `${mainFrameTopMostY}px`;
    } else {
      styledBlueBox.top = `${this.state.y-boxDimension/2}px`;
    }
    // Setting up x bounds for blue box
    if (this.state.x > mainFrameLeftMostX-1 && this.state.x < mainFrameLeftMostX+boxDimension/2) {
      styledBlueBox.left = `${mainFrameLeftMostX}px`;
    } else if (this.state.x > mainFrameRightMostX-boxDimension/2 && this.state.x < mainFrameRightMostX+1) {
      styledBlueBox.left = `${mainFrameRightMostX-boxDimension}px`;
    } else {
      styledBlueBox.left = `${this.state.x-boxDimension/2}px`;
    }

    // Set position coordinates for zoom Photo
    const newX = -(this.state.x - mainFrameLeftMostX)+200-(boxDimension/2); // subtract 190 to get left corner of mouse ref 
    const newY = -(this.state.y - mainFrameTopMostY)+250-(boxDimension/2); // subtract 190 to get left corner of mouse ref
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
    }

    !this.state.mouseOnImage ? styledImg.display = 'none' : styledImg.display = 'block'; // display zoom only if mouseOnImage is true
    !this.state.mouseOnImage ? styledBlueBox.display = 'none' : styledBlueBox.display = 'block'; // display blueBox only if mouseOnImage is true

    return (
      <div className={ styles.mainPhoto }>
        <div ref={this.myRef} className={ styles.mainFrame } onMouseEnter={ this.openZoom } onMouseLeave={ this.closeZoom } onMouseMove={this.setCoordinates }>
          <div className={ styles.blueBox } style={ styledBlueBox }><img src="https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB211431200_.gif"/></div>
          <img src={this.props.curr}/>
        </div>
        <div className={ styles.zoomFrame }>
          <img style={ styledImg } />
        </div>
      </div>
    );
  };
}

export default MainPhoto;
