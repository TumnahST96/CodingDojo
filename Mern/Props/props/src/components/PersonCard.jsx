import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h1>{this.props.text}</h1>
          <p>Age:{this.props.number}</p>
          <p>Hair Color: {this.props.hair}</p>
        </div>
      </div>
    );
  }
}

export default PersonCard;
