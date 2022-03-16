import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

function App() {
  return (
    <div className="App">
      <h1>
        <marquee> heye there </marquee>
        <ClassCounter text="hey i am classing" />
        <FunctionCounter text="funcking here babe" />
      </h1>
    </div>
  );
}

export default App;
