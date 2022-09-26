import React from "react";
import SkillDropDown from "./SkillDropDown";
import { skills } from "../data/skills";

function SkillsAccordian() {
  return (
    <div className="skills-accordian">
      {skills.map((skill) => {
        return <SkillDropDown key={skill.id} {...skill} />;
      })}
    </div>
  );
}

export default SkillsAccordian;
