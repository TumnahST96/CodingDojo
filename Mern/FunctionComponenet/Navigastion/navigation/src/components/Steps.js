import React from "react";

const Steps = (props) => {
  return (
    <div
      onClick={props.onDelete}
      className="steps d-flex justify-content-around"
    >
      {props.direction === "right" ? (
        <span className="direction">⏭</span>
      ) : props.direction === "left" ? (
        <span className="direction">⏪</span>
      ) : props.direction === "forward" ? (
        <span className="direction">⬆️</span>
      ) : (
        <span className="direction"> ⬇️</span>
      )}

      <h1>{props.instructions}</h1>
      <h2>{props.distance} miles</h2>

      {/* instructions: {props.instructions}
      direction: {props.direction}
      distance: {props.distance} */}
    </div>
  );
};

export default Steps;
