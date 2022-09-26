import React, { useState } from "react";

function SkillDropDown({ title, text }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setIsDisplayed(!isDisplayed)}>
          {isDisplayed ? "-" : "+"}
        </button>
      </header>
      {isDisplayed && (
        <div className="skills-info-div">
          {text.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}

export default SkillDropDown;
