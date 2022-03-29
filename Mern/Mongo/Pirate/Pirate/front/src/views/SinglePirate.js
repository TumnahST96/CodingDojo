import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SinglePirate = props =>{
    const {_id} = useParams ();
    const [pirate, setPirate] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/"+_id)
        .then(res=>{
            console.log(res.data);
            setPirate(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })

    }, [_id])

    // const onDeleteHandler = () =>{
    //     console.log("here")
    //     if(window.confirm("Are you sure yo uwant to delete this job?")){
    //         axios.delete(`http://localhost:8000/api/pirates/${_id}`)
    //         .then(res=>{
    //             history.push("/")
    //         })
    //         .catch(err=>console.log(err.response))
    //     }
        
    // }
 
    return (
        <div className="w-75 mx-auto p-5" >
            <div>
                <img src={pirate.image} alt = "some pirate"/>
            </div>
            <div>
                <h1>{pirate.name}</h1>
                <h2>{pirate.phrase}</h2>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.treasure}</p>
                <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p><button>{pirate.pegLeg ? "Yes" : "No"}</button>
                <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p><button>{pirate.eyePatch ? "Yes" : "No"}</button>
                <p>Hook: {pirate.hook ? "Yes" : "No"}</p>
            </div>
            

            {/* <Link className="btn btn-info btn-lg m-3" to = {`/managers/${_id}/update`}>Edit</Link>
            <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3" >Delete</button> */}
            <Link className="btn btn-primary btn-lg m-3" to = {`/`}>Back</Link>
        </div>
    )
}

export default SinglePirate;