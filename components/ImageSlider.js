const React = require('react')
class ImageSlider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    return(
      <div className="slide-index">I am on slide {this.state.currentSlideIndex}</div>
    );
  }
};
module.exports = ImageSlider
