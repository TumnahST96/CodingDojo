
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import React, {useState} from "react";

const Register = () => {

    const [registerInfo, setRegisterInfo] = useState ({
        fname: "",
        lname: "",
        username: "",
        email: "", 
        passcode: "", 
        confirm: ""
    })

    const regChangeHandler = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value
        })
    }

    const register = event =>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/register", registerInfo, {withCredentials:true})
            .then(res=>{
                console.log("response from register", res);
            })
            .catch(err => console.log(err));

    }
  return (
    <div className="container">
      <form onSubmit={register}>
        <div className="form-group">
          <div className="form-group">
            <label>First Name</label>
            <input onChange={regChangeHandler} type="text"  name="fname" />
          </div>
          <div className="form-group" >
            <label>Last Name</label>
            <input onChange={regChangeHandler} type="text" name="lname" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input onChange={regChangeHandler} type="text"  name="username" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={regChangeHandler} type="text"  name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={regChangeHandler} type="text"  name="passcode" />
          </div>
          <div  className="form-group">
            <label>Confirm Password</label>
            <input onChange={regChangeHandler} type="text" name="confirm" />
          </div>
          <input type= "submit" value="Sign Up" className = "btn btn-success"/>
        </div>
      </form>
    </div>
  );
};

export default Register;
