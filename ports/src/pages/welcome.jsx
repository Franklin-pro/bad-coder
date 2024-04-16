import React from "react";
import "../sass/main.scss";
import NavBar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
// import Card from "../components/card";
import Footer from "../components/footer";
import TheBox from "../components/project";
import Contacts from "../components/contact";

function Welcome() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <div className="controller">
        <h1 className="heads">PROJECT I DID</h1>
        <div className="cards">
        <TheBox/>
       
        </div>
      
      </div>
      <div className="contact-container">
        <div className="contacts">
        <div className="contact-left">
        <div className="contact-head">
        <h1>I'm here to help. Feel free to get in touch with Me.</h1>
        <p>I value your questions, feedback, and inquiries</p>
        </div>
        <div className="bottom">
            <h2>Lets Talk.</h2>
            <p>Please fill in the details and we will be in touch shortly or send us email or Call us</p>
            <div className="bold">
            <b>franklinprogrammer.com</b>
            <b>+250783446449</b>
            </div>
            
        </div>
        </div>
        <div className="contact-right">
        <h3>Complete the form below...</h3>
        <Contacts/>
        
        </div>
        </div>
        </div>


      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Welcome;
