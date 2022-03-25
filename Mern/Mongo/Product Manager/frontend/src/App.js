import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import SingleManager from './views/SingleManager';
function App() {
  return (
    <div className="App">
      <h1>Hey It's me</h1>

      <Switch>
          <Route exact path= "/">
            <Main/>
          </Route>
          <Route exact path= "/managers/create">
            <Create/>
          </Route>
          <Route exact path= "/managers/:_id/update">
            <Update/>
          </Route>
          <Route exact path= "/managers/:_id">
            <SingleManager/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
