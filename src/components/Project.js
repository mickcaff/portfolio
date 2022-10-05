import React from "react";

function Project(props) {
  const {
    date,
    techMain,
    type,
    title,
    description,
    image,
    siteLink,
    codeLink,
  } = props;

  return (
    <div className="project-div">
      <div className="project-image-div">
        <img
          className="project-image"
          src={process.env.PUBLIC_URL + "/images" + image}
          alt=""
        />
      </div>
      <div className="project-details">
        <div className="links-icons-div">
          <div className="project-links-div">
            {siteLink[1] && (<a className="project-link site" href={siteLink[2]} target="__blank" rel="noopener noreferrer">
              {siteLink[0]}
            </a>)}
            {codeLink[1] && (<a className="project-link code" href={codeLink[2]} target="__blank" rel="noopener noreferrer">
              {codeLink[0]}
            </a>)}
          </div>
          <p>{techMain}</p>
        </div>
        <h2 className="project-title">{title}</h2>
        <div className="project-type-date">
          <h4 className="project-type">{type}</h4>
          <h4 className="project-date">{date}</h4>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Project;

// Mapping of techstack icons -> if want to implement
// SVGs are saved in public/icons
// Array of svg names saved in projects.techStack
/* <p>
      {techStack.map((icon, index) => {
        return(
            <img className="project-icon" key={index} src={process.env.PUBLIC_URL + "/icons/" + icon + ".svg"} alt={icon} title={icon}/>
        )
      })}
  </p> */