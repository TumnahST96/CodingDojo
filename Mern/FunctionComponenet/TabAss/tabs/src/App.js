import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  // const [keepTab, setTab] = useState([]);
  const [tab1, setInfo1] = useState([
    "inside of tab 1",
    "a lot of strings",
    "resides",
  ]);
  const [tab2, setInfo2] = useState([
    "inside of tab 1",
    "a lot of strings",
    "resides",
  ]);
  const [tab3, setInfo3] = useState([
    "inside of tab 1",
    "a lot of strings",
    "resides",
  ]);

  const HandleTabs = () => {};

  return (
    <div className="App">
      <form>
        <div className="btnClass mx-5">
          <button
            onClick={(e) => setInfo1(e.target.value)}
            value={tab1}
            className="tab1 btn btn-dark mx-10"
          >
            Tab 1
          </button>
          <button className="tab2 btn btn-dark mx-10">Tab 2</button>
          <button className="tab3 btn btn-dark mx-10">Tab 3</button>
        </div>
      </form>
    </div>
  );
}

export default App;
