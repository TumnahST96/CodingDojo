import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import PersonCard from "./components/PersonCard";
import PersonFunc from "./components/PersonFunc";

function App() {
  const hello = "hwew there";

  const printStuff = (msg) => {
    console.log(msg);
  };
  return (
    <div className="App">
      {/* <PersonCard text="Doe, Jane" number={45} hair="Black" />
      <PersonCard text="Smith, John" number={88} hair="Brown" />
      <PersonCard text="Fillmore, Millard" number={50} hair="Browns" />
      <PersonCard text="Smith, Maria" number={62} hair="Browns" /> */}
    


    <PersonFunc text="Doe, Jane" number={45} hair="Black" />
    <PersonFunc text="Smith, John" number={88} hair="Brown" />
    <PersonFunc text="Fillmore, Millard" number={50} hair="Browns" />
    <PersonFunc text="Smith, Maria" number={62} hair="Browns" />
    
    </div>

  );
}

export default App;
