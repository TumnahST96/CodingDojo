import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [pokies, setPokies] = useState([]);

  function handleInput() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=800&offset=0")
      .then((response) => setPokies(response.data.results));
  }

  return (
    <div className="App">
      <button onClick={handleInput}> Fetch Pokies</button>

      <ul>
        {pokies.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
