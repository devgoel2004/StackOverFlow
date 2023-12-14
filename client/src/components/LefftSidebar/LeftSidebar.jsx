import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";

import { FaGlobe } from "react-icons/fa6";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slidInStyle = {
    transform: "translateX(0%)",
  };
  const slideOutStyle = {
    transform: "translateX(-100%)",
  };
  const length = window.innerWidth;
  console.log(length);
  const now = new Date();
  const hours = now.getHours();
  return (
    <div
      className={
        hours === 12 || hours === 5 ? `dark-left-sidebar` : `left-sidebar`
      }
      style={slideIn ? slidInStyle : slideOutStyle}>
      <nav className="side-nav">
        <button className="nav-btn" onClick={handleSlideIn}>
          <NavLink
            to="/Stackoverflow-frontend"
            className="side-nav-links"
            activeClassName="active">
            <p>Home</p>
          </NavLink>
        </button>
        <nav className="side-nav-div">
          <div>
            <p style={{ paddingLeft: "10px" }}>PUBLIC</p>
          </div>
          <button onClick={handleSlideIn} className="nav-btn">
            <NavLink
              to="/Stackoverflow-frontend/Questions"
              className="side-nav-links"
              activeClassName="active"
              style={{ paddingLeft: "40px" }}>
              <FaGlobe />
              <p style={{ paddingLeft: "10px" }}>Questions</p>
            </NavLink>
          </button>
          <button className="nav-btn" onClick={handleSlideIn}>
            <NavLink
              to="/Stackoverflow-frontend/Tags"
              activeClassName="active"
              className="side-nav-links"
              style={{ paddingLeft: "40px" }}>
              <p>Tags</p>
            </NavLink>
          </button>
          <button className="nav-btn" onClick={() => handleSlideIn()}>
            <NavLink
              to="/Stackoverflow-frontend/Users"
              activeClassName="active"
              className="side-nav-links"
              style={{ paddingLeft: "40px" }}>
              <p>Users</p>
            </NavLink>
          </button>
        </nav>
      </nav>
    </div>
  );
};

export default LeftSidebar;
