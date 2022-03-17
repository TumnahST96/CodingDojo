import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CheckStuff from "./components/CheckStuff";

function App() {
  const [task, setTask] = useState([]);

  const [form, setForm] = useState({
    list: "",
    completed: false,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    setTask([...task, form]);
  };

  const inputHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onCheck = (index) => {
    const completeIndex = [...task];
    completeIndex[index].completed = !completeIndex[index].completed;

    setTask(completeIndex);
  };

  const onDeleteHandler = (index) => {
    console.log(index);

    const copyState = [...task];
    copyState.splice(index, 1);
    setTask(copyState);
  };

  return (
    <div className="App">
      <div className="todo w-100 d-flex justify-content-evenly">
        <form onSubmit={onSubmitHandler}>
          <div className="col-auto">
            <input
              onChange={inputHandler}
              name="list"
              type="text"
              placeholder="Add a task to do"
            />
          </div>

          <div>
            <input type="submit" className="form-control btn btn-success" />
          </div>
        </form>
      </div>

      <div>
        {task.map((todo, index) => {
          return (
            <CheckStuff
              key={index}
              list={todo}
              checked={() => onCheck(index)}
              onDelete={() => {
                onDeleteHandler(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
