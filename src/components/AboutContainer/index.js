import React from "react";
import "./about.scss";
import aboutImage from "../../assets/images/space-colony-website-illustrations-04@2x.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <div className="grey-content">
          <p className="grey-text">
            <span className="grey-line"></span>
            About Us
          </p>
        </div>
        <h1>We Are a Cutting Edge Digital Agency</h1>
        <p className="content">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="txt-num">
          <p className="text">
            <span className="numbers">60</span> Awesome <br /> Projects.
          </p>
          <p className="text">
            <span className="numbers">6</span> Years <br /> Experienced.
          </p>
          <p className="text">
            <span className="numbers">89</span> Satisfied <br /> Clients.
          </p>
        </div>
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
