import React from "react";
import "./about.scss";
import aboutImage from "../../assets/images/space-colony-website-illustrations-04@2x.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <span className="grey-line"></span>
        <span className="grey-text">About Us</span>
        <h1>We Are a Cutting Edge Digital Agency</h1>
        <p className="content">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <span className="number">60</span>
        <span className="text">
          Awesome <br /> Projects.
        </span>
        <span className="number">6</span>
        <span className="text">
          Years <br /> Experienced.
        </span>
        <span className="number">89</span>
        <span className="text">
          Satisfied <br /> Clients.
        </span>
      </div>
      <div className="about-image">
        <img
          className="about-image-item"
          src={aboutImage}
          alt="Space Ant"
        ></img>
      </div>
    </div>
  );
};

export default About;
