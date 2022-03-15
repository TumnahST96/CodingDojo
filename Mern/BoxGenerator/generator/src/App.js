import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import FormPage from "./components/FormPage";
import Boxes from "./components/Boxes";

function App() {
  //array of 2 things === function
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <FormPage setBoxes={setBoxes} boxes={boxes} />
      <Boxes boxes={boxes} />
    </div>
  );
}

export default App;
