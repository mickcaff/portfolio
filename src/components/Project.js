import React from "react";
// import {SiRubyonrails} from 'react-icons/si'

function Project(props) {
  const { id, date, techMain, techStack, type, title, description, image, siteLink, codeLink } =
    props;

  return (
    <div className="project-div">
      <div className="project-image">
        
      </div>
      <div className="project-details">
          <h2>{title}</h2>
          <h5>{date}</h5>
          <h4>{type}</h4>
          <p>{description}</p>
          <p>
              {techStack.map((icon) => {
                return(
                    <span>{icon}</span>
                )
              })}
          </p>
          <a href={siteLink}>Live Site</a>
          <a href={codeLink}>View Code</a>
      </div>
    </div>
  );
}

export default Project;
