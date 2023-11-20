import React from "react";
import ab1 from "../asset/ab1.JPG";
function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="heads">About-Me</h1>
        <div className="abouts">
          <div className="about-image">
            <img src={ab1} alt="about" />
            <h1>HELLOO,I'm Franklin</h1>
            <p>
              i'm full-stack web developer,i can make beautiful project you can
              find Me on ALL platform.
            </p>
          </div>
          <div className="about-content">
            <p  className="ab-cont">
              I'm full-stack software developer i am 19years old i learned
              software development i was continuening a trainning in Ict coding
              for on alight program i'm able to develop any program part of
              front-end and back-end even i would doing ui/ux design.
            </p>
            <div className="btn-ab">
            <button>Download Cv</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
