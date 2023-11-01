import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assests/globe-solid.svg";
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}>
            <img src={Globe} alt="globe" className="image-globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            activeClassName="active"
            className="side-nav-links"
            style={{ paddingLeft: "40px" }}>
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Tags"
            activeClassName="active"
            className="side-nav-links"
            style={{ paddingLeft: "40px" }}>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
