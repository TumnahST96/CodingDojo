import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PokeCard from "./components/PokeCard";
import { useState } from "react";

function App() {
  const [party, setParty] = useState([
    "blastoise",
    "charizard",
    "dragonair",
    "gyarados",
    "bidoof",
    "salamence",
    "umbreon",
    "blaziken",
    "mewtwo",
  ]);

  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setParty([...party, form]);
    setForm("");
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler} className="w-50 mx-auto my-5">
        <input type="text" onChange={(event) => setForm(event.target.value)} />
        <button className="btn btn-primary mx-3" type="submit">
          Add to party
        </button>
      </form>

      <div className="poke-box flex-wrap">
        {party.map((item, i) => {
          return <PokeCard key={i} poke={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
