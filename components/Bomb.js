const React = require('react')
class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render(){
    let time = "Boom!"
    if(this.state.secondsLeft !== 0){
      time = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return(
      <div>{time}</div>
    );
  }
};
module.exports = Bomb
