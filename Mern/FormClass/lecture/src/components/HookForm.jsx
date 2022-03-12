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
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(form);
  };

  const lenghthVaidator = (input, num) => {
    return input.length > num;
  };

  const passVaidator = (input1, input2, num) => {
    return input1 === input2 && input1 >= num;
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
          {lenghthVaidator(form.Fname, 2) ? (
            ""
          ) : (
            <span className="alert-danger">You need at least 2 characters</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-lable">Last Name</label>
          <input
            name="Lname"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
          {lenghthVaidator(form.Lname, 2) ? (
            ""
          ) : (
            <span className="alert-danger">You need at least 2 characters</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-lable">Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          ></input>
          {lenghthVaidator(form.email, 5) ? (
            ""
          ) : (
            <span className="alert-danger">You need at least 5 characters</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            name="conpass"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
          {passVaidator(form.password, form.conpass, 8) ? (
            ""
          ) : (
            <span className="alert-danger">
              both password needs to be same and 8 characters
            </span>
          )}
        </div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
    </div>
  );
};

export default HookForm;
