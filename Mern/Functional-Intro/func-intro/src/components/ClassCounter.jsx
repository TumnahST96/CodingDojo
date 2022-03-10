import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg">click me!</button>
      </div>
    );
  }
}

export default ClassCounter;
