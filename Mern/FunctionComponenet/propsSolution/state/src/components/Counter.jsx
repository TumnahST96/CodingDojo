import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    console.log("clicked");
    // this.state.counter++;
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    const { text } = this.props;
    const { counter } = this.state;

    return (
      <div className="boxy">
        {text}
        <h1>{counter}</h1>
        <button onClick={this.increaseCounter}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
