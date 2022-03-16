import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Place from "./components/Place";

function App() {
  const [places, setPlaces] = useState([
    "Mason's Creamery",
    "Mitchell's Ice Cream",
    "Margie's Candies",
  ]);

  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newState = [...places, form];
    setPlaces(newState);
    setForm("");
  };

  return (
    <div className="App">
      <h1>Favorite Ice Cream Places</h1>
      {/* {
        for(let i =0; i<places.length; i++){
          <p>{places[i]}</p>
        }
      } */}

      <form onSubmit={onSubmitHandler}>
        <input
          value={form}
          onChange={(event) => {
            setForm(event.target.value);
          }}
          type="text"
          className="w-50 mx auto form-control"
          placeholder="What's your favorite Ice crreasm place?"
        />

        <input
          type="submit"
          className="btn btn-primary btn-lg d-block mx-auto my-2"
        />
      </form>

      {places.map((item, i) => {
        console.log(`function run ${i}, item: ${item}`);
        return <Place key={i} name={item} />;
        // (
        //   <ul>
        //     {i} {item}
        //   </ul>
        // );
      })}
    </div>
  );
}

export default App;
