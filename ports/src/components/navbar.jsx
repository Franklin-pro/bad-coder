import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
<nav>
    <div className="nav-container">
        <div className="navbar">
            <div className="logo">
                <h1>franklin</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="./franklinprogrammer" className="link">Home</Link></li>
                <li><Link to="./about-me" className="link">About-Me</Link></li>
                <li><Link to="./contact-me" className="link">Contact-Me</Link></li>
                <li><Link to="#" className="link">Blogs</Link></li>
            </ul>
        </div>
    </div>
</nav>
    )
}
export default NavBar