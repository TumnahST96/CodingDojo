import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = props => {
    const { _id } = useParams();
    const [name, setName] = useState(' ');
    const history = useHistory();
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + _id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err =>{
                console.error(err);
                setError(err.response.data.err.errors)

            } )
    }, [_id]);


    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + _id, {
            name
            
        })
            .then(res =>{
                console.log(res)
                history.push("/");
            } )
            .catch(err =>{
                console.error(err);
                

            } )
    }
    const cancelHandler = () =>{
        history.push("/");
      }



    return(
        <div>
            <h1>Hey its Update</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </p>
               
               
                <input type= "submit" className = "btn btn-success btn-lg d-block mx-auto my-3"/>
                <button onClick={cancelHandler} className = "btn btn-success btn-lg d-block mx-auto my-3">Cancel</button>
            </form>

        </div>
    )
}

export default Update;