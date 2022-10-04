import React, { useState } from "react";
import { skills } from "../data/skills";

function SkillsTable() {
  const [value, setValue] = useState(0);
  const { id, title, text } = skills[value];
  return (
    <div className="skills-table">
      <div className="skills-btn-div">
        {skills.map((skill, index) => {
          return (
            <button
              key={skill.id}
              onClick={() => setValue(index)}
              className={`skill-btn ${index === value && "active-skill-btn"}`}
            >
              {skill.title}
            </button>
          );
        })}
      </div>
      <div className="skills-info-div">
        {text.map((item, index) => {
          return (
            <div key={index} className="skill-point">
              <div>
                <i className="fa-solid fa-sm fa-terminal"></i>
              </div>
              <p> {item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsTable;
