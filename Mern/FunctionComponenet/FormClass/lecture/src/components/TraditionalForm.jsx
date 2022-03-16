import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TraditionalForm = (props) => {
  const [flavor, setFlavor] = useState("");
  const [flavorError, setFlavorError] = useState("");
  const [sauce, setSauce] = useState("");
  const [topping, setTopping] = useState("");
  const [whip, setWhip] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const submitMe = { flavor, sauce, topping, whip };
    console.log(flavor);
    console.log(submitMe);
  };

  const onFlavorHandler = (event) => {
    setFlavor(event.target.value);

    if (event.target.value.length < 5) {
      setFlavorError("a flavor needs 5 character");
    } else {
      setFlavorError("");
    }
  };
  return (
    <div className="w-50 p-3 border border-dark mx-auto">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="form-lable">Flavor</label>
          <input
            type="text"
            className="form-control"
            onChange={onFlavorHandler}
          />
          <span className="alert-danger">{flavorError}</span>
        </div>
        <div className="form-group">
          <label className="form-lable">Sauce</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setSauce(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="form-lable">Toppings</label>
          <select
            className="form-control"
            onChange={(event) => {
              setTopping(event.target.value);
            }}
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
        <div className="form-group">
          <label className="form-check-label">Whipped Cream?</label>
          <input
            type="checkbox"
            className="form-check-label"
            onChange={(event) => {
              setWhip(event.target.checked);
            }}
          />
        </div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
    </div>
  );
};

export default TraditionalForm;
