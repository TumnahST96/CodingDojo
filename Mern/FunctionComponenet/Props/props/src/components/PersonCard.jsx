import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.number,
    };
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="card">
        <div className="content">
          <h1>{this.props.text}</h1>
          <p>Age:{counter}</p>
          <p>Hair Color: {this.props.hair}</p>
          <button onClick={this.increaseCounter}>
            Birthday Button for {this.props.text}
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
