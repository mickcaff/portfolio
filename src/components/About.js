import React from "react";
import SkillsTable from "./SkillsTable";
import SkillsAccordian from "./SkillsAccordian";
import { useViewport } from "../hooks/useViewport";

function About() {
  const { width } = useViewport();
  const breakPoint = 600;

  return (
    <main className="about-main">
      <div className="about-intro-div">
        <div className="about-intro-title">
          <h1>Hi, I'm Mick</h1>
          <p>
            I'm a <span className="underline">junior full stack developer</span>{" "}
            based on the Sunshine Coast, Queensland.
          </p>
          <p>
            I'm due to graduate from <span>Coder Academy's</span> Standard{" "}
            <span>Full Stack Web Development Bootcamp</span> in November 2022,
            and currently{" "}
            <span className="underline">open to new opportunities</span>.
          </p>
        </div>
        <div className="about-intro-image"></div>
      </div>
      <div className="about-skills-div">
        <div className="skills-title-table">
          <h1>Skillset</h1>
          {width < breakPoint ? <SkillsAccordian /> : <SkillsTable />}
        </div>
      </div>
      <div className="about-myself-div">
        <div className="contact-details">
          <h1>About</h1>
          <p>
            About myself.
          </p>
          <p>
            Read my resume.
          </p>
        </div>
      </div>
      <div className="about-contact-div">
        <div className="contact-details">
          <h1>Contact</h1>
          <p>
            mcaffery@outlook.com
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
