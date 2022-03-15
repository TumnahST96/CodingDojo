import logo from "./logo.svg";
import "./App.css";
import sleep from "./imgs/sleep.gif";
import thunder from "./imgs/thunder.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App">
      <div className="nav w-100 d-flex justify-content-evenly">
        <img src={sleep} alt="sleeping" />
        <h1 className="w-50">Map Quest</h1>

        <img src={thunder} alt="lightninggg" />
      </div>

      <div className="w-75 mx-auto">
        <Steps
          direction="up"
          instructions="turn right that way"
          distance={3.2}
        />
      </div>
    </div>
  );
}

export default App;
