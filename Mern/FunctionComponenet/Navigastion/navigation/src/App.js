import logo from "./logo.svg";
import "./App.css";
import sleep from "./imgs/sleep.gif";
import thunder from "./imgs/thunder.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from "./components/Steps";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [steps, setSteps] = useState([
    // { direction: "left", instructions: "turn left at pitkin", distance: 3.2 },
    // { direction: "right", instructions: "turn right at atkin", distance: 0.2 },
    // {
    //   direction: "forward",
    //   instructions: "head straight in south",
    //   distance: 1.2,
    // },
    // {
    //   direction: "backward",
    //   instructions: "head back at north",
    //   distance: 6.2,
    // },
    // { direction: "left", instructions: "head berrimon", distance: 6.2 },
  ]);

  const [form, setForm] = useState({
    direction: "left",
    instructions: "",
    distance: 0,
  });

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSteps([...steps, form]);
    //take all the info on the form
    //set your state with it
    //dont forget to copy your state you might have important stuff ya HEAR
  };
  const onDeleteHandler = (index) =>{
    console.log(index)

    const copyState = [...steps];
    copyState.splice(index, 1);
    setSteps(copyState);

    
  }
  return (
    <div className="App">
      <div className="nav w-100 d-flex justify-content-evenly">
        <img src={sleep} alt="sleeping" />
        <h1 className="w-50">Map Quest</h1>

        <img src={thunder} alt="lightninggg" />
      </div>

      <form onSubmit={onSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <select
              onChange={onChangeHandler}
              name="direction"
              className="form-select"
            >
              <option>left</option>
              <option>right</option>
              <option>forward</option>
              <option>backward</option>
            </select>
          </div>
          <div className="col-auto">
            <input
              onChange={onChangeHandler}
              name="instructions"
              placeholder="where are you going?"
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-auto">
            <input
              onChange={onChangeHandler}
              name="distance"
              placeholder="how far?"
              type="number"
              step="0.1"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <input type="submit" className="form-control btn btn-success" />
          </div>
        </div>
      </form>

      <div className="w-75 mx-auto">
        {steps.map((item, i) => {
          return (
            <Steps
              key={i}
              direction={item.direction}
              instructions={item.instructions}
              distance={item.distance}
              onDelete = {()=>{
                onDeleteHandler(i)
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
