import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Reapeter from "./components/Repeater";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Pokemon from "./components/Pokemon";
import WordNum from "./components/WordNum";
import Word from "./components/Word";

function App() {
  const [category, setCategory] = useState("pokemon");
  const [detail, setDetail] = useState("");

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("form submitted");
    history.push(`/${category}/${detail}`);
  };

  return (
    <div className="App">
      <h1>router demo</h1>

      <div className="navBar">
        <Link to="/repeat/heyitsme/64" className="btn btn-primary btn-lg">
          test route
        </Link>

        <form onSubmit={onSubmitHandler}>
          <select
            className="form-select w-25 d-inline block "
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>pokemon</option>
            <option>repeat</option>
          </select>
          <input
            type="text"
            className="form-select w-25 d-inline block"
            onChange={(event) => setDetail(event.target.value)}
          />
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/repeat/:word1">
          <Reapeter />
        </Route>

        <Route exact path="/pokemon/:name">
          <Pokemon />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        {/* <Route exact path = "/:number">
          <DisplayNumber/>
        </Route> */}

        <Route exact path="/:word">
          <Word/>
        </Route>

        <Route exact path="/:word/:color/:bgColor">
          <WordNum/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
