import React from "react";
import me1 from '../asset/me1.JPG'
import { TypeAnimation } from "react-type-animation";
import { Carousel } from 'antd';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

function Home(){
    return (
        <>
        <div className="home-container">
        <div className="home">
        <div className="home-text">
       
        <div className="btn-home">
        <Button variant="contained">
       hire me
      </Button>
      <Button variant="contained">
       get resume
      </Button>
        </div>
        <p className="paragraph">i can make UI/UX Desgn and Frontend,<br/><br/> Developer you can find Me on github.</p>
        <TypeAnimation 
         sequence={[
            "HELLOO,",
            1000,
            "It's Me,",
            1000,
         " Franklin Developer,",
            1000,
            "i'm Full-Stack  web developer. ",
            1000

         ]}
         speed={50}
         repeat={Infinity}
         style={{fontSize: '2rem'}}
         
         >


         </TypeAnimation>
        </div>
        <div className="image">
        <Carousel autoplay autoplaySpeed={3000}>
        <img src={me1} alt="game" className="img"/>
        <img src={me1} alt="game" className="img"/>
        </Carousel>
        </div>

        </div>
        <div className="let">
        <Button variant="contained" endIcon={< ArrowForwardIcon/>}>
       let work together
      </Button>
        </div>
        </div>
        </>
    )
}
export default Home