import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateSundae = props => {

    const [form, setForm] = useState({
        name: "",
        flavor: "",
        whipped: false,
        numScoop: null
    })


const [error, setError] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type ==="checkbox" ? event.target.checked : event.target.value

        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("submit form");


        axios.post("http://localhost:8000/api/sundaes/create", form)
            .then(res=>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response)
                setError(err.response.data.err.errors)
            })
    }

    return (
        <div className="w-75 mx-auto my-4">
            <h1>Create a Sundae</h1>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type=  "text" name = "name" className = "form-control" onChange={onChangeHandler} />
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="flavor">Flavor: </label>
                    <input type=  "text" name = "flavor" className = "form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.flavor && error.flavor.message}</span>
                </div>

                <div className="form-check m-3">
                    <label className = "form-check-label" htmlFor="whipped">Whipped Cream? : </label>
                    <input type=  "checkbox" name = "whipped" className = "form-check-input"/>
                    <span className="alert-danger">{error.whipped && error.whipped.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="numScoop">How many scoops?: </label>
                    <input type=  "number" name = "numScoop" className = "form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.numScoop && error.numScoop.message}</span>
                </div>

                <input type= "submit" className="btn btn-success btn-lg mt-3"/>

            </form>
        </div>
    )
}

export default CreateSundae;