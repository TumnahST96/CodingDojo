import React from "react";
import { useParams } from "react-router-dom";
const Repeater = (props) => {
  const {word1, word2} = useParams();
  return (
    <div>
      {word1}

      {
        !isNaN(word2)&&<h1>you put a number here {parseInt(word2)+1}</h1>
      }

      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
      <h1>About {word1} page</h1>
    </div>
  );
};

export default Repeater;
