import React from "react";
import data from "./skillsData";
import "./skills.scss";
const Skills = () => {
  return (
    <div className="skills-section">
      <h1>
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
    </div>
  );
};
export default Skills;
