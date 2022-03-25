import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleManager = props =>{
    const {_id} = useParams ();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/managers/"+_id)
        .then(res=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })

    }, [_id])

    const onDeleteHandler = () =>{
        console.log("here")
        if(window.confirm("Are you sure yo uwant to delete this job?")){
            axios.delete(`http://localhost:8000/api/managers/${_id}`)
            .then(res=>{
                history.push("/")
            })
            .catch(err=>console.log(err.response))
        }
        
    }
    return (
        <div className="w-75 mx-auto p-5" >
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Little Description: {product.description}</p>

            <Link className="btn btn-info btn-lg m-3" to = {`managers/${_id}/edit`}>Edit</Link>
            <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3" >Delete</button>
            <Link className="btn btn-primary btn-lg m-3" to = {`/`}>Back</Link>
        </div>
    )
}

export default SingleManager;