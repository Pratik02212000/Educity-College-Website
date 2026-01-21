import React from "react";
import "./About.css";
import about from "../assets/about.png";
import play_icon from "../assets/play-icon.png";


const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right"data-aos="fade-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo
          vel magni perferendis architecto ab laudantium inventore eos maiores
          reiciendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo
          vel magni perferendis architecto ab laudantium inventore eos maiores
          reiciendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo
          vel magni perferendis architecto ab laudantium inventore eos maiores
          reiciendis?
        </p>
      </div>
    </div>
  );
};

export default About;
