import React from "react";
import { Link } from "react-router-dom";



function Card(props){
return (
    <>
        <div className="card-container">
        
            <div className="card">
            <div className="icon">
         <i>{props.icon}</i> 
            </div>
           
                <h1>{props.heads}</h1>
                <p>{props.Desc}</p>
            <Link>read more...</Link>
            </div>
 
        </div>

    </>
)
}
export default Card