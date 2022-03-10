import React, { Component } from "react";
import Pixel from "./Pixel";

class Row extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
    );
  }
}

export default Row;
