import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HookForm = (props) => {
  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    conpass: "",
  });

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <div className="w-50 p-3 border border-dark mx-auto">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="form-lable"> First Name </label>
          <input
            name="Fname"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="form-lable">Last Name</label>
          <input
            name="Lname"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label className="form-lable">Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="form-check">
          <label className="form-check-label">Password</label>
          <input
            name="password"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">Confirm Password</label>
          <input
            name="conpass"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
    </div>
  );
};

export default HookForm;
