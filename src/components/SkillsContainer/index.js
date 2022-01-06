import React from "react";
import data from "./skillsData";
import dataMobile from "./skillsDataMobile";
import "./skills.scss";
const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">
        Our skill set <span className="skills-line"></span>
        <span className="skills-grey-text">What we actually do</span>
      </h1>
      <section class="cards">
        {data.map((item) => (
          <article class="card">
            <img src={item.image} alt="image" />
            <div className="card-text">
              <h2>{item.title}</h2>
              <p> {item.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section class="cards-mobile">
        {dataMobile.map((item) => (
          <article class="card-mobile">
            <img src={item.image1} alt="image" />
            <img src={item.image2} alt="image" />
            <div className="card-text-mobile">
              <h2 className="title-mobile">{item.title}</h2>
              <p className="content-mobile"> {item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
export default Skills;
