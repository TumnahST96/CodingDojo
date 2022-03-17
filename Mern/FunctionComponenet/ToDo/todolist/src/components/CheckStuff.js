import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const CheckStuff = (props) => {
  return (
    <div className="steps d-flex justify-content-around">
      <div class="form-check">
        <input
          onChange={props.checked}
          checked={props.completed}
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        />

        <h1 style={ props.list.completed ? { textDecoration: "line-through" }: {}}>
          {/* props.list.completed ? { textDecoration: "line-through" } : {} */}
          {props.list.list}
        </h1>
      </div>
    </div>
  );
};

export default CheckStuff;
