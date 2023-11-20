import React from "react";
import me1 from '../asset/me1.JPG'
import { TypeAnimation } from "react-type-animation";

function Home(){
    return (
        <>
        <div className="home-container">
        <div className="home">
        <div className="home-text">
       
        <div className="btn-home">
        <button>hire me</button>
        <button>get resume</button>
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
            "i'm Front-End  web developer. ",
            1000

         ]}
         speed={50}
         repeat={Infinity}
         style={{fontSize: '2rem'}}
         
         >


         </TypeAnimation>
        </div>
        <div className="image">
            <img src={me1} alt="game" className="img"/>
        </div>

        </div>

        </div>
        </>
    )
}
export default Home