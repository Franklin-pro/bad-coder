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
   
   
        <Contacts/>
        
        


      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Welcome;
