import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreatePirate = props => {

    const [form, setForm] = useState({
        name: "",
        image: "",
        treasure: null,
        phrase:"",
        position: "",
        pegLeg: false,
        eyePatch: false,
        hook: false,
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


        axios.post("http://localhost:8000/api/pirates/create", form)
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
            <h1>Add Pirate</h1>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Pirate Name: </label>
                    <input type=  "text" name = "name" className = "form-control" onChange={onChangeHandler} />
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL: </label>
                    <input type=  "text" name = "image" className = "form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.image && error.image.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="treasure"># of treasure Chest: </label>
                    <input type=  "number" name = "treasure" className = "form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.treasure && error.treasure.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="phrase">Pirates Catch phrase: </label>
                    <input type=  "text" name = "phrase" className = "form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.phrase && error.phrase.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Crew Position: </label>
                   
                    <select className="form-control" type=  "text" name = "position" onChange={onChangeHandler} >
                            <option>Select One from here</option>
                            <option>Captain</option>
                            <option>First Mate</option>
                            <option>BoatSwain</option>
                            <option>Powder Monkey</option>
                    </select>
                    <span className="alert-danger">{error.position && error.position.message}</span>
                </div>

                <div className="form-check m-3">
                    <label className = "form-check-label" htmlFor="pegLeg">Peg Leg </label>
                    <input type=  "checkbox" name = "pegLeg" className = "form-check-input" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.pegLeg && error.pegLeg.message}</span>
                </div>


                <div className="form-check m-3">
                    <label className = "form-check-label" htmlFor="eyePatch">Eye Patch </label>
                    <input type=  "checkbox" name = "eyePatch" className = "form-check-input"  onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.eyePatch && error.eyePatch.message}</span>
                </div>


                <div className="form-check m-3">
                    <label className = "form-check-label" htmlFor="hook">Hook</label>
                    <input type=  "checkbox" name = "hook" className = "form-check-input"  onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.hook && error.hook.message}</span>
                </div>

                

                <input type= "submit" className="btn btn-success btn-lg mt-3"/>

            </form>
        </div>
    )
}

export default CreatePirate;