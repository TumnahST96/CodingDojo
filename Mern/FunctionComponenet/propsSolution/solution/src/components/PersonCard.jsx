import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <h1>
            {this.props.lastName}, {this.props.firstName}
          </h1>
          <h3>Age: {this.props.Age}</h3>
          <h3>Hair Color: {this.props.hairColor}</h3>
          <button onClick={this.flipSwitch}>Birthday</button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
