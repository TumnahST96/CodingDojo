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
      return [
        ...todos,
        newTodo(
          action.payload.Fname,
          action.payload.Lname,
          action.payload.email
        ),
      ];
  }
}

function newTodo(valF, valL, valEm) {
  return {
    id: Date.now(),
    Fname: valF,
    Lname: valL,
    email: valEm,
    complete: false,
  };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [Fname, setFName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: name,
  //     payload: value,
  //   });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { Fname: Fname, Lname: Lname, email },
    });
    setFName("");
    setLname("");
    setEmail("");
  }

  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>First Name:</span>{" "}
            <input
              type="text"
              value={Fname}
              onChange={(e) => setFName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            <span>Last Name:</span>{" "}
            <input
              type="text"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Email:</span>{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

// import logo from "./logo.svg";
// import "./App.css";
// import React, { useReducer, useState } from "react";

// const ACTIONS = {
//   ADD_TODO: "add-todo",
// };

// function reducer(state, action) {
//   // switch(action.type){
//   //     case ACTIONS.ADD_TODO
//   // }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [name, setName] = useState(" ");

//   function handleChange(e) {
//     const { name, value } = e.target;
//     dispatch({
//       type: name,
//       payload: value,
//     });
//   }

//   return (
//     <div>
//       {JSON.stringify(state)}
//       <div>
//         <form>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }
