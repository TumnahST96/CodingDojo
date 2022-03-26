import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./Views/Main";
import Create from "./Views/Create";
import Update from "./Views/Update";
import SingleAuthor from "./Views/SingleAuthor";

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/authors/create">
          <Create />
        </Route>

        <Route exact path="/authors/:_id/update">
          <Update />
        </Route>

        <Route exact path="/authors/:_id">
          <SingleAuthor />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
