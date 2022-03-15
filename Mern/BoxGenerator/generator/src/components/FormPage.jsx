import React, { useState } from "react";

const FormPage = (props) => {
  const [boxColor, setBoxColor] = useState("");
  const [boxSize, setBoxSize] = useState("");

  const onSubmitHandlerBox = (event) => {
    event.preventDefault();
    let newBox = { color: boxColor, size: boxSize };
    props.setBoxes([...props.boxes, newBox]);
    setBoxColor("");
  };

  return (
    <form onSubmit={(event) => onSubmitHandlerBox(event)}>
      <label>Color</label>
      <input
        type="text"
        onChange={(e) => setBoxColor(e.target.value)}
        value={boxColor}
      />
      <input
        type="number"
        onChange={(e) => setBoxSize(e.target.value + "px")}
      />
      <input type="submit" value="Add Box" />
    </form>
  );
};

export default FormPage;
