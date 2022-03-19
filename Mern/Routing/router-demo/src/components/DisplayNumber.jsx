import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DisplayNumber = (props) => {
const {numbers} = useParams();
  return <h1>{numbers}</h1>;
};

export default DisplayNumber;
