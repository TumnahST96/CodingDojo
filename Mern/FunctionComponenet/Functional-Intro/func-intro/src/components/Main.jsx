import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="main p-5 col-8 mx-auto mt-5">
        Main
        <div className="in d-flex flex-row justify-content-between">
          <div className="b1 p-4 mt-5"></div>
          <div className="b2 p-4 mt-5"></div>
          <div className="b3 p-4 mt-5"></div>
        </div>
        <div className="botom p-6 mt-5"></div>
      </div>
    );
  }
}

export default Main;
