import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const WordNum = (props) => {
const {word, color, bgColor} = useParams();
  return (
      <div style={{color: color, backgroundColor: bgColor, textAlign:'center'}}>
          <h1>{word}</h1>
      </div>
  );
};

export default WordNum;
