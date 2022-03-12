import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SimpleForm = (props) => {
  const [form, setForm] = useState({
    flavor: "",
    sauce: "",
    topping: "",
    whipped: false,
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
          <label className="form-lable"> Flavor </label>
          <input
            name="flavor"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="form-lable">Sauce</label>
          <input
            name="sauce"
            type="text"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label className="form-lable">Toppings</label>
          <select
            name="topping"
            className="form-select"
            onChange={onChangeHandler}
          >
            <option>pecans</option>
            <option>peanuts</option>
            <option>cookie dough</option>
            <option>pizza</option>
            <option>grass</option>
            <option>steak</option>
            <option>shoes</option>
          </select>
        </div>
        <div className="form-check">
          <label className="form-check-label">Whipped Cream?</label>
          <input
            name="whipped"
            type="checkbox"
            className="form-input-check"
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
    </div>
  );
};

export default SimpleForm;
