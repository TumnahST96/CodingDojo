import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Tab from "./components/Tab";
import { Button } from "bootstrap";

function App() {
  const [tab, setTab] = useState([
    { info: "fdasfdsa" },
    { info: "dsdsd" },
    { info: "zzzzzz" },
    { info: "zz66zz" },
  ]);
  const [current, setCurrent] = useState(1);

  // const HandleTabs = () => {};

  return (
    <div className="App">
      {tab.map((item, i) => {
        return (
          <button
            onClick={(e) => setCurrent(e.target.value)}
            value={i}
            className="tab1 btn btn-dark mx-10"
          >
            Tab {i + 1}
          </button>
        );
      })}

      <Tab tab={tab} current={current} />
    </div>
  );
}

export default App;
