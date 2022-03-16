import React, { useEffect, useState } from "react";

const PokeCard = (props) => {
  const [defaultURL, setDefaultURL] = useState("");
  const [shinyURL, setShinyURL] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.poke)
      .then((data) => data.json())
      .then((res) => {
        console.log(res.sprites.front_default);
        setDefaultURL(res.sprites.front_default);
        setShinyURL(res.sprites.front_shiny);
      })
      .catch((err) => console.log(err));
  }, [props.poke]);

  const flipHover = () => setHover(!hover);
  return (
    <div className="poke-card">
      <img
        onMouseEnter={flipHover}
        onMouseMove={flipHover}
        src={hover ? shinyURL : defaultURL}
        alt={props.poke}
      />
      {props.poke}
    </div>
  );
};

export default PokeCard;
