import React from "react";
import ab1 from "../asset/ab1.JPG";
import Button from '@mui/material/Button';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import { Image } from "antd";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="heads">About-Me</h1>
        <div className="abouts">
          <div className="about-image">
          <Image
          src={ab1} alt="about"
          >

          </Image>
           
            <h1>HELLOO,I'm Franklin</h1>
            <p>
              i'm full-stack web developer,i can make beautiful project you can
              find Me on ALL platform.
            </p>
            <div className="icons">
            <InstagramIcon className="icon"/>
            <WhatsAppIcon className="icon"/>
            <GitHubIcon className="icon"/>
            <LinkedInIcon className="icon"/>
            </div>
          </div>
          <div className="about-content">
            <p  className="ab-cont">
              I'm full-stack software developer i am 19years old i learned
              software development i was continuening a trainning in Ict coding
              for on alight program i'm able to develop any program part of
              front-end and back-end even i would doing ui/ux design.
            </p>
            <div className="btn-ab">
            <Button variant="contained" endIcon={<GetAppRoundedIcon/>}>
      DownLoad Cv
      </Button>
            </div>
            
          </div>
        </div>
        <div className="tools">
   
    <h1 className="heads">Design Services</h1>
    <div className="propt">
    <h2>web design</h2>/<h2>UI/UX Design</h2>
    <h2>Animation website</h2>/<h2>marketing</h2>
    <h2>PHOTOGRAPHY</h2>/<h2>Brand Identity</h2>
    </div>
    <h1 className="heads">TOOLS I USE</h1>
    <div className="propt">
    <h2>Figma</h2>/<h2>Photoshop</h2>
    <h2>HTML</h2>/<h2>CSS</h2>
    <h2>REACT JS</h2>/<h2>NODE JS</h2>
    </div>

</div>
      </div>
    </>
  );
}
export default About;
