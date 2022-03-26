import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Main = (props) => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/findAll")
      .then((res) => {
        console.log(res);
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const onDeleteHandler = (_id, indexI) =>{
    console.log("here"+ indexI)
    axios.delete(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            const copyState = [...author];
            copyState.splice(indexI, 1);
            setAuthor(copyState)
        })
        .catch(err=>console.log(err.response))
}
  return (
    <div>
      <h1>Favorite Authors</h1>
      
      <Link to = "/authors/create">Add a author</Link>
            <h2>We have quotes by: </h2>
            <table className="table table-dark table-striped table-hover"> 
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    author.map((item, i)=>{
                        return <tr key = {i}>
                            
                        <td><Link to={`/authors/${item._id}`}>{item.name}</Link></td>
                            
                            <td><Link to={`/authors/${item._id}/update`}>Edit</Link> | <button onClick={()=>onDeleteHandler(item._id, i)} className="btn btn-danger btn-sm">delete</button></td>
                            
                        </tr>
                    })
                }
                </tbody>
            </table>

      

    </div>
  );
};

export default Main;
