import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title-div">
        <h1 className="title-name">Mick Caffery</h1>
        <h3 className="title-job">Junior Full Stack Developer</h3>
      </div>
      <div className="links-div">
        <NavLink className="navbar-navlink" to="/" end>
          About
        </NavLink>
        <NavLink className="navbar-navlink" to="/portfolio">
          Portfolio
        </NavLink>
        {/* <div className="socials-div">
          <i class="socials-icon fa-brands fa-lg fa-linkedin"></i>
          <i class="socials-icon fa-regular fa-lg fa-square"></i>
          <i class="socials-icon fa-brands fa-lg fa-square-github"></i>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
