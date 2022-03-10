import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassCounter from "./components/ClassCounter";

function App() {
  return (
    <div className="App">
      <h1>
        <marquee>hey there</marquee>
      </h1>
      <ClassCounter />
    </div>
  );
}

export default App;
