import React from "react";

import NavBar from "../navbar";
import Footer from "../footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Contacts from "../contact";
const ContactPage=()=>{
    return(
        <>
        <NavBar/>
        <div className="contactPage-container">
            <h1>GET IN TOUCH</h1> 
            <div className="contactPage-content">
                <div className="content-first">
                <LocationOnIcon className="icon"/>
                <h2>ADDRESS</h2>
                <p>RWANDA-Kigali-Kicukiro</p>
                </div>
                <div className="content-first">
                <PermPhoneMsgIcon className="icon"/>
                <h2>PHONE-whatapp/call</h2>
                <p> +250783446449</p>
                </div>
                <div className="content-first">
                <AttachEmailIcon className="icon"/>
                <h2>MESSAGE</h2>
                <p>E-Mail: franklinprogrammer@gmail.com</p>
                </div>
                </div>  
        </div>
        <div className="contact-form">
            <h1>fill this form bellow:</h1>
            <div className="form">
            <Contacts/>
            </div>
        
        </div>
       
        <Footer/>
        </>
    )
}
export default ContactPage