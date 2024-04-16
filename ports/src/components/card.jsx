import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import { useEffect } from "react";



function Card(props){
    useEffect(()=>{
        AOS.init({duration:1200})
    },[])
return (
    <>
        <div className="card-container">
        
            <div className="card" >
            <div className="imagex">
        <img src={props.image} alt="wow"/>
            </div>
           
                <h1 className="head">{props.heads}</h1>
                <p className="para">{props.Desc}</p>
            <Link className="link">visit web</Link>
            </div>
 
        </div>

    </>
)
}
export default Card