import React, { Component } from "react";
class Dojo extends Component {
  render() {
    return (
      <form action="/process" method="post">
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="username" class="form-control" />
        </div>
      </form>
    );
  }
}

export default Dojo;
