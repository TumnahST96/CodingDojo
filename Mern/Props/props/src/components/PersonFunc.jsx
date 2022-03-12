import React, { useState } from "react";

const PersonFunc = (props) => {
  const { text, number, hair } = props;
  const [state, setState] = useState(number);

  const increaseCounter = () => {
    setState(state + 1);
  };

  return (
    <div className="card">
      <div className="content">
        <h1>{text}</h1>
        <p>Age:{state}</p>
        <p>Hair Color: {hair}</p>
        <button onClick={increaseCounter}>Birthday Button for {text}</button>
      </div>
    </div>
  );
};

export default PersonFunc;
