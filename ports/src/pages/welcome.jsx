import React from "react";
import "../sass/main.scss";
import NavBar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Card from "../components/card";
import { Carousel } from "antd";
import me1 from "../asset/me1.JPG";
import canon from "../asset/canon.jpeg";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Footer from "../components/footer";
import Contact from "../components/contact";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PinDropIcon from '@mui/icons-material/PinDrop';

function Welcome() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <div className="controller">
        <h1 className="heads">PROJECT I DID</h1>
        <div className="cards">
          <Card
            icon={<CodeOffIcon style={{ fontSize: "3rem" }} />}
            heads="Font-End projects"
            Desc="I'm full-stack software developer i am 19years old i learned software development i was continuening a trainning in Ict coding"
          />
          <Card
            icon={<SettingsApplicationsIcon style={{ fontSize: "3rem" }} />}
            heads="Back-End projects"
            Desc="I'm full-stack software developer i am 19years old i learned software development i was continuening a trainning in Ict coding"
          />
          <Card
            icon={<AutoFixHighIcon style={{ fontSize: "3rem" }} />}
            heads="UI/UX Design project"
            Desc="I'm full-stack software developer i am 19years old i learned software development i was continuening a trainning in Ict coding"
          />
        </div>
        <div className="tools">
          <h1 className="heads">PHOTOGRAPHY PROJECT</h1>
          {/* <h1>frekgff</h1> */}
          <div className="image">
            <Carousel autoplay autoplaySpeed={3000}>
              <img src={me1} alt="game" className="img" />
              <img src={canon} alt="" className="img" />
            </Carousel>
            {/* <img src={me1} alt="game" className="img"/> */}
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h1 className="heads">CONTACT ME</h1>
        <div className="contacts">
          <div className="get">
            <h1 className="heads">get in touch</h1>
            <div className="get-text">
              <p>
                <span><AttachEmailIcon style={{fontSize:"4rem",display:"flex"}}/>frank@gmail.com</span>
              </p>
              <p>
                <span><PhoneInTalkIcon style={{fontSize:"4rem",display:"flex"}}/>079*****543🔥🔥🔥</span>
              </p>
              <p>
                <span><PinDropIcon style={{fontSize:"4rem",display:"flex"}}/>Kigali,Rwanda(KK 616)</span>
              </p>
              <p>
                Welcome to my web site i'm software developer i live in kigali
                rwanda
                <br />
                if you want to hire me you can text me on email box
              </p>
            </div>
          </div>
          <div className="fild">
            <h1 className="heads">CONTACT ME</h1>
            <Contact />
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
