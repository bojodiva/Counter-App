import React, {Component} from "react";

class Counter extends Component {
  constructor(props){
    super(props)  
    this.state = {
      count: 0,
    }
  }

  //function handling decrement
  handleDecrement=()=>{
    if(this.state.count > 0){
      this.setState({
        count: this.state.count -1
      })
    }
  }

  //function handling increment
handleIncrement=()=>{
  if(this.state.count >= 0){
    this.setState({
      count: this.state.count + 1
    })
  }
}

  
render(){
  return(
<main>
    <div className="nav--bar">
      <div className="name--logo">
      <span className="button" id="x">B</span>
      <span className="button" id="y">O</span>
      <span className="button" id="z">J</span>
      <span className="button" id="w">O</span>
        </div>
    </div>

  <h1 className="title">Alphabet Converter</h1>
  
  <div className="container">
    <div className="decrement" onClick={this.handleDecrement}>
      -
    </div>
    <div className="screen">
      {this.state.count}
    </div>
    <div className="increment" onClick={this.handleIncrement}>
    +
    </div>
  </div>
  </main>
    )
}
}

export default Counter;
