import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-intro">
        <h1>Skill up for the future</h1>
        <p>Learn new skills from anywhere</p>
        <Link to={"signup"}>
          <input type="button" value="Get Started For Free" className="hero-btn" />
        </Link>
      </div>
      <div className="hero-img">
        <img src="../images/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
