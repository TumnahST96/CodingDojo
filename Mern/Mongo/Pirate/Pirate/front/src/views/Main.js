import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const Main = props =>{

    const [pirate, setPirate] = useState([]);


    useEffect (() =>{
        axios.get("http://localhost:8000/api/pirates/findAll")
        .then(res=>{
            console.log(res)
            setPirate(res.data);
        })
        .catch(err=>{
            console.log(err.response)
        })
    }, [])

   
   

    const onDeleteHandler = (_id, indexI) =>{
        console.log("here"+ indexI)
        axios.delete(`http://localhost:8000/api/pirates/${_id}`)
            .then(res=>{
                const copyState = [...pirate];
                copyState.splice(indexI, 1);
                setPirate(copyState)
            })
            .catch(err=>console.log(err.response))
    }

    

    console.log("Sorted Pirates: ", pirate.sort( (a,b) => {
        const nameA =a.name.toUpperCase()
        const nameB =b.name.toUpperCase()
        if ( nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    }))
    // sort by name
// items.sort(function(a, b) {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });


    return (
        <div className="w-75 mx-auto">
            
            <h2>Pirate Crew </h2>
            <Link to = "/pirates/create">Add Pirate</Link>
            <table className="table table-dark table-striped table-hover"> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    
                                           
                    pirate.map((item, i)=>{
                        return <tr key = {i}>
                            
                        <td>{item.name}</td>
                            
                            <td><Link to={`/pirates/${item._id}`}>View Pirate</Link> | <button onClick={()=>onDeleteHandler(item._id, i)} className="btn btn-danger btn-sm">Walk the Plank</button></td>
                            
                        </tr>
                    })
                }
                </tbody>
            </table>
           
        </div>
    )
}

export default Main;