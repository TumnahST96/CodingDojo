import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const People = props =>{
    const {id} = useParams();
    const [person, setPerson] = useState();


    useEffect(()=>{
        console.log("i am here")
        axios.get(`http://swapi.dev/api/people/${id}/`)
            .then(res=>{
                console.log(res);
                setPerson(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const Render = () =>{
        if(!person){
            return (
                <div>
                    {/* <h1>{person.name}</h1> */}
                    {/* <p>
                        Hair: {person.hair_color}
                    </p>
                    <p>
                        Height: {person.height}
                    </p>
                    <p>
                        Mass: {person.mass}
                    </p>
                    <p>
                        Skin Color: {person.skin_color}
                    </p> */}
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>{person.name}</h1>
                    <p>
                        Hair: {person.hair_color}
                    </p>
                    <p>
                        Height: {person.height}
                    </p>
                    <p>
                        Mass: {person.mass}
                    </p>
                    <p>
                        Skin Color: {person.skin_color}
                    </p>

                </div>
                
            )
        }
    }
    return Render()
    
}

export default People;