import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import People from "./components/People";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Planet from "./components/Planet";

function App() {
  const [category, setCategory] = useState();
  const [id, setID] = useState();

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${id}`);
  };
  return (
    <div className="App">
      <div className="form-group ">
        <form onSubmit={onSubmitHandler}>
          <label>Search for: </label>
          <input
            type="text"
            name="category"
            onChange={(event) => setCategory(event.target.value)}
          />

          <label>ID: </label>
          <input
            type="number"
            name="id"
            onChange={(event) => setID(event.target.value)}
          />

          <input className="btn btn-success" type="submit" value="Submit" />
        </form>
      </div>

      <Switch>
        <Route exact path="/people/:id">
          <People />
        </Route>
        <Route exact path="/planets/:id">
          <Planet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
