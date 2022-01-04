import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/space-colony-website-illustrations-02@3x.png";
import heroImgSecond from "../../assets/images/space-colony-website-illustrations-03@3x.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <img className="hero-image" alt="hero" src={heroImg} />
      <h1>Hi. We are Space colony.</h1>
      <p>
        A colony of ants who explore space to bring you best possible
        technologies.
      </p>
      <span className="grey-line"></span>
      <img className="second-image" src={heroImgSecond} alt="Second Image" />
      <span className="white-background"></span>
      <p className="explore">Scroll and Explore</p>
    </div>
  );
};

export default Hero;
