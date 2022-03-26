import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const history = useHistory();
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    name: "",
  });
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/authors/create", form)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.err.errors);
      });
  };

  const cancelHandler = () =>{
    history.push("/");
  }

  return (
    <div>
      <form className="w-75 mx-auto" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            className="form-control"
          />
          <span className="alert-danger">
            {error.name && error.name.message}
          </span>
        </div>

        <input
          type="submit"
          className="btn btn-success btn-lg d-block mx-auto my-3"
        />
        <button onClick={cancelHandler} className = "btn btn-success btn-lg d-block mx-auto my-3">Cancel</button>
      </form>
    </div>
  );
};

export default Create;
