import logo from "./logo.svg";
import "./App.css";

import PokeCard from "./components/PokeCard";

function App() {
  return (
    <div className="App">
      <h1>hey its me </h1>
      <PokeCard poke="ditto" />
    </div>
  );
}

export default App;
