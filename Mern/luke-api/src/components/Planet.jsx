import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Planet = (props) => {
  const { id } = useParams();
  const [planet, setPlanet] = useState();

  useEffect(() => {
    console.log("i am here");
    axios
      .get(`http://swapi.dev/api/planets/${id}/`)

      .then((res) => {
        console.log(res);
        setPlanet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default Planet;
