import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Word = (props) => {
  const { word } = useParams();
  return (
    <div>
      <h1>
        {isNaN(word) ? "the word is: " + {word} : "the number is" + {word}}
      </h1>
    </div>
  );
};

export default Word;
