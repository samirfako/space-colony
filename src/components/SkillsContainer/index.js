import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>
        Our skill set <span className="skills-line"></span>
        <span className="skills-grey-text">What we actually do</span>
      </h1>
      <section class="cards">
        <article class="card">
          <img></img>
          <h2>Planning</h2>
          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>UIUX design</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>UIUX design</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>Development</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>
      </section>
      {/*--- 2nd section cards ---  */}

      <section class="cards">
        <article class="card">
          <img></img>
          <h2>Android apps</h2>
          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>Websites</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>Learnio</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>

        <article class="card">
          <img></img>
          <h2>Startups</h2>

          <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </article>
      </section>
    </div>
  );
};

export default Skills;
