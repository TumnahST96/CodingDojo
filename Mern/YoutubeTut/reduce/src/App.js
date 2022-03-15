import logo from "./logo.svg";
import "./App.css";
import React, { useReducer, useState } from "react";

// const initialState = {
//   name: "",
//   email: "",
// };

const ACTIONS = {
  ADD_TODO: "add_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      if (action.payload.name === "Fname") {
        if (action.payload.value.length < 2) {
          return {
            ...todos,
            [action.payload.name]: {
              value: action.payload.value,
              error: "First name too short",
            },
          };
        }
        return {
          ...todos,
          [action.payload.name]: {
            value: action.payload.value,
            error: null,
          },
        };
      } else if (action.payload.name === "Lname") {
        if (action.payload.value.length < 2) {
          return {
            ...todos,
            [action.payload.name]: {
              value: action.payload.value,
              error: "Last name too short",
            },
          };
        }
        return {
          ...todos,
          [action.payload.name]: {
            value: action.payload.value,
            error: null,
          },
        };
      } else if (action.payload.name === "email") {
        if (!validateEmail(action.payload.value)) {
          return {
            ...todos,
            [action.payload.name]: {
              value: action.payload.value,
              error: "Invalid email address!",
            },
          };
        }
      } else {
        return todos;
      }

    default:
      return todos;
  }
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
const initialState = {
  Fname: {
    value: "",
    error: null,
  },
  Lname: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  // const [Fname, setFName] = useState("");
  // const [Lname, setLname] = useState("");
  // const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: e.target,
    });
  }

  console.log(todos);

  return (
    <div>
      <form>
        <div>
          <label>
            <span>First Name:</span>{" "}
            <input type="text" name="Fname" onChange={handleSubmit} />
          </label>
        </div>

        <div>
          <label>
            <span>Last Name:</span>{" "}
            <input type="text" name="Lname" onChange={handleSubmit} />
          </label>
        </div>
        <div>
          <label>
            <span>Email:</span>{" "}
            <input type="text" name="email" onChange={handleSubmit} />
          </label>
        </div>
        <input type="submit" value="Submit the form" />
      </form>
    </div>
  );
}
