import React from "react";




import { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
    
const Update = (props) => {
    const history = useHistory();
    const { _id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    // const [form, setForm] = useState({
    //     title: "",
    //     price: null, 
    //     description: ""
    // })

    useEffect(() => {
        axios.get('http://localhost:8000/api/managers/' + _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [_id]);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/managers/' + _id, {
            title,
            price,
            description
            
        })
            .then(res =>{
                console.log(res)
                history.push("/");
            } )
            .catch(err => console.error(err));
    }
    
    return (
       
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type= "submit" className = "btn btn-success btn-lg d-block mx-auto my-3"/>
            </form>
        </div>
    )
   
}
    
export default Update;