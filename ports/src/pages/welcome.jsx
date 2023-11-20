import React from "react";
import '../sass/main.scss';
import NavBar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";


function Welcome(){
return (
    <>
<NavBar/>
<Home/>
<About/>
    </>
)
}
export default Welcome