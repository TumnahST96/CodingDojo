import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [pokies, setPokies] = useState([]);
  //const pokies = []
  //setPokies= function updates the pokies

  const fetchInfo = () => {
    console.log("caLLING MEEE");

    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        // console.log(res.data);
        // console.log(res.data.results);

        setPokies(res.results);
      })
      .catch((err) => console.log(err));

    // "https://pokeapi.co/api/v2/pokemon/
  };

  return (
    <div className="App">
      <h1>hey there</h1>

      <button onClick={fetchInfo} className="btn btn-primary">
        Fetch Poki
      </button>

      <ul>
        {pokies.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
