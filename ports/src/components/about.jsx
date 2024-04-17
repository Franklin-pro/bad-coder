import React from "react";
// import ab1 from "../asset/ab1.JPG";
import m1 from "../asset/119.jpg";
import Button from "@mui/material/Button";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import { Image } from "antd";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="heads">About-Me</h1>
        <div className="abouts">
          <div className="about-image">
            <Image src={m1} alt="about"></Image>
          </div>
          <div className="about-content">
            <p className="ab-cont">
              my name is frank ndanyuzwe i am 19-year-old i'm full-stack
              software developer, I have honed my skills through continuous
              learning and hands-on training in ICT coding, particularly through
              the Alight program and andela technical program. My proficiency
              spans all aspects of software development, encompassing both
              front-end and back-end development, as well as UI/UX design.
            </p>
            <div className="btn-ab">
              <Button variant="contained" endIcon={<GetAppRoundedIcon />}>
                DownLoad Cv
              </Button>
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
}
export default About;
