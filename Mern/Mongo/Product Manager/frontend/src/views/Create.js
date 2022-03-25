import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Create = props =>{
    const history = useHistory();
    const [error, setError] = useState({});
    const [form, setForm] = useState({
        title: "",
        price: null, 
        description: ""
    })



    const onChangeHandler = event =>{
        setForm({
            ...form, 
            [event.target.name] : event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault()
        axios.post("http://localhost:8000/api/managers/create", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response);
                setError(err.response.data.err.errors)
            })
    }
    return (
        <div>
            <form className="w-75 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name = "title" className="form-control"/>
                    <span className="alert-danger">{error.title && error.title.message}</span>

                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={onChangeHandler} type="number" name = "price" className="form-control"/>
                    <span className="alert-danger">{error.price && error.price.message}</span>

                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onChange={onChangeHandler} type="text" name = "description" className="form-control"/>
                    <span className="alert-danger" >{error.description && error.description.message}</span>

                </div>
                <input type= "submit" className = "btn btn-success btn-lg d-block mx-auto my-3"/>
            </form>
        </div>
    )
}

export default Create;