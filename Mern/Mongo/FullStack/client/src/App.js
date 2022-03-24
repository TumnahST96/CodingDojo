import logo from "./logo.svg";
import "./App.css";

import Main from "./views/Main";

import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import CreateSundae from "./views/CreateSundae";


function App() {


    return(
      <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Sundaes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Sundae</Link>
              </li>
            
            
            </ul>
          </div>
        </div>
      </nav>
          <Switch> 
            <Route exact path = "/">
              <Main/>
            </Route>
            <Route exact path= "/create">
              <CreateSundae/>
            </Route>
            
            
          </Switch>
      </div>
    )
}

export default App;
