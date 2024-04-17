import React from "react";
import { Image } from "antd";
import mentor from '../../asset/json/mentor.json';
import AOS from 'aos';
import { useEffect } from "react";

function Mentor() {
    useEffect(()=>{
        AOS.init({duration:1200})
    },[])


    return (
        <div className="mentor-container">
           
            <div className="mentors">
            <h1>MY GALLERY</h1>
                <div className="grid">
                    {mentor ? (
                        mentor.map((mentorItem, index) => (
                            <div className="image" key={index} data-aos="zoom-in">
                                <div>
                                    {mentorItem.newsImage.map((imageUrl, imageIndex) => (
                                        <Image
                                            key={imageIndex}
                                            src={imageUrl}
                                            alt={`Gallery Image ${imageIndex}`}
                                            className={`gallery-img `}
                                            style={{ objectFit: "cover",width:'100%' }}
                                            
                                        />
                                    ))}
                                </div>
                                <div className={`text`}>
                                    <h1>{mentorItem.name}</h1>
                                    <p>{mentorItem.title}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mentor;