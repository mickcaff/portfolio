import React, { useEffect, useState } from "react";
import SkillsTable from "./SkillsTable";
import SkillsAccordian from "./SkillsAccordian";
import { aboutMyself } from "../data/aboutMyself";
import { useViewport } from "../hooks/useViewport";
import resume from "../images/resume.pdf"

function About() {
  const { width } = useViewport();
  const breakPoint = 600;
  const email = "mcaffery@outlook.com";
  const [displayNotice, setDisplayNotice] = useState(false);
  const [displayCopied, setDisplayCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayCopied(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [displayCopied]);

  return (
    <main className="about-main">
      <div className="section-div">
        <div className="about-intro-section">
          <div className="intro-title-text">
            <h1>Junior Full Stack Developer</h1>
            <p>
              Hi, I'm Mick. I'm a{" "}
              <span className="underline">junior full stack developer</span>{" "}
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
        <div className="about-socials-section">
          <div>
            <i className="socials-icon fa-brands fa-xl fa-linkedin"></i>
            <i className="socials-icon fa-brands fa-xl fa-square-github"></i>
          </div>
          <div className="email-copy-div">
            {displayNotice && (
              <p className="copy-notice">
                <i className="fa-solid fa-sm fa-copy"></i> Copy
              </p>
            )}
            {displayCopied && (
              <p className="copy-notice">
                <i className="fa-solid fa-check"></i> Copied!
              </p>
            )}
            <p
              className="about-intro-email"
              onClick={() => {
                setDisplayNotice(false);
                setDisplayCopied(true);
                navigator.clipboard.writeText(email);
              }}
              onMouseEnter={() => setDisplayNotice(true)}
              onMouseOut={() => setDisplayNotice(false)}
            >
              <i className="fa-solid fa-lg fa-envelope"></i> {email}
            </p>
          </div>
        </div>
      </div>
      <div className="section-div">
        <div className="skills-title-table">
          <h1>Skillset</h1>
          {width < breakPoint ? <SkillsAccordian /> : <SkillsTable />}
        </div>
      </div>
      <div className="section-div">
        <div className="about-myself-section">
          <h1>About myself</h1>
          <p>{aboutMyself.one}</p>
          <p>{aboutMyself.two}</p>
          <p>{aboutMyself.three}</p>
          <a href={resume} target="__blank" rel="noopener noreferrer">Read my resume</a>
        </div>
      </div>
    </main>
  );
}

export default About;
