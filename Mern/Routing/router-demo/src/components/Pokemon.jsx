// import axiom from 'axiom';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { useEffect } from "react";

const Pokemon = (props) => {
  const { name } = useParams();

  const [imgURL, setImageURL ]= useState("");

  useEffect(() => {
    console.log("page loaded");

    axios
      .get("https://pokeapi.co/api/v2/pokemon/"+ name)
      .then((res) => {
        console.log(res);
        setImageURL(res.data.sprites.front_default);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div>
        <img src= {imgURL} alt = {name}/>
        <h1>About Pokemon page: {name}</h1>;
        </div>
  )
        
  
};

export default Pokemon;
