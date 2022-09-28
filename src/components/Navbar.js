import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title-div">
        <h1 className="title-name">Mick Caffery</h1>
      </div>
      <div className="links-div">
        <NavLink className="navbar-navlink" to="/" end>
          About
        </NavLink>
        <NavLink className="navbar-navlink" to="/portfolio">
          Portfolio
        </NavLink>
      </div>
      
    </nav>
  );
}

export default Navbar;
