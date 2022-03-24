import React from "react";

const SundaeBox = props => {
    return (
        <div className="sundaeBox">
             
            <h2>{props.sundae.name}</h2>
            <p>Flavor: {props.sundae.flavor}</p>
            <p>Scoops: {props.sundae.numScoops}</p>
            {/* <p>Toppings: {props.sundae.toppings.join(", ")}</p> */}
            <p>Whipped? {props.sundae.whipped?"heck yeahh" : "this sundae sucks"}</p>
          
        
        </div>
    )
}

export default SundaeBox;