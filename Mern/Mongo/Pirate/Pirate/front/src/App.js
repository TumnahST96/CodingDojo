import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./views/Main"
import CreatePirate from "./views/CreatePirate"
import SinglePirate from "./views/SinglePirate"


function App() {
  return (
    <div className="App">
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
      </nav>
      </div>
      

      <div>
      <Switch>
          <Route exact path= "/">
            <Main/>
          </Route>
          <Route exact path= "/pirates/create">
            <CreatePirate/>
          </Route>
          {/* <Route exact path= "/managers/:_id/update">
            <Update/>
          </Route> */}
          <Route exact path= "/pirates/:_id">
            <SinglePirate/>
          </Route>
      </Switch>
      </div>


    </div>
  );
}

export default App;
