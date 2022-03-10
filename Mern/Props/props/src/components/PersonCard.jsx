import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.isDark}>
        <h1>{this.props.text}</h1>
        <h3>Age:{this.props.number}</h3>
        <h3>Hair Color: {this.props.hair}</h3>
      </div>
    );
  }
}

export default PersonCard;
