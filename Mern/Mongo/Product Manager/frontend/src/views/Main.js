import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Main = props =>{

    const [manager, setManager] = useState([]);

    useEffect (() =>{
        axios.get("http://localhost:8000/api/managers/findAll")
        .then(res=>{
            console.log(res)
            setManager(res.data);
        })
        .catch(err=>{
            console.log(err.response)
        })
    }, [])

    const onDeleteHandler = (_id, indexI) =>{
        console.log("here"+ indexI)
        axios.delete(`http://localhost:8000/api/managers/${_id}`)
            .then(res=>{
                const copyState = [...manager];
                copyState.splice(indexI, 1);
                setManager(copyState)
            })
            .catch(err=>console.log(err.response))
    }


    return (
        <div className="w-75 mx-auto">
            <Link to = "/managers/create">Post new Product</Link>
            <h2>List of Products availbale </h2>
            <table className="table table-dark table-striped table-hover"> 
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    manager.map((item, i)=>{
                        return <tr key = {i}>
                            
                        <td><Link to={`/managers/${item._id}`}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>edit | <button onClick={()=>onDeleteHandler(item._id, i)} className="btn btn-danger btn-sm">delete</button></td>
                            
                        </tr>
                    })
                }
                </tbody>
            </table>
           
        </div>
    )
}

export default Main;