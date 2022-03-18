import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <h1>router demo</h1>
        {/* <Link to="/">Home</Link>
        {"   |   "}
        <Link to="/about">About</Link>
      </div> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      </div>
      
   
  );
}

export default App;
