import React, { useState } from "react";

function SkillDropDown({ title, text }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <article className="dropdown-div">
      <header
        className="dropdown-title-btn"
        onClick={() => setIsDisplayed(!isDisplayed)}
      >
        <h4>{title}</h4>
        <button>
          {isDisplayed ? (
            <i class="fa-solid fa-xl fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-xl fa-angle-down"></i>
          )}
        </button>
      </header>
      {isDisplayed && (
        <div className="skills-info-div">
          {text.map((item, index) => {
            return (
              <div className="skills-info-text" key={index}>
                <div>
                  <i className="fa-solid fa-2xs fa-terminal"></i>
                </div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
      <hr />
    </article>
  );
}

export default SkillDropDown;
