import React, { Component } from "react";
var randomColor = require("randomcolor");

class ColorPixel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
  }

  onClickHandler = () => {
    this.setState({
      color: randomColor(),
    });
  };

  render() {
    const style = {
      backgroundColor: this.state.color,
    };
    return (
      <div
        style={style}
        onMouseOver={this.onClickHandler}
        className="pixel"
      ></div>
    );
  }
}
export default ColorPixel;
