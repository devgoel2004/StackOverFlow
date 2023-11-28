import React from "react";
import "./LeftSidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Globe from "../../assests/globe-solid.svg";
import { useSelector } from "react-redux";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUserReducer);
  const slidInStyle = {
    transform: "translateX(0%)",
  };
  const slideOutStyle = {
    transform: "translateX(-100%)",
  };
  const checkAuth = () => {
    if (User === null) {
      alert("Login ");
    }
  };
  return (
    <div className="left-sidebar" style={slideIn ? slidInStyle : slideOutStyle}>
      <nav className="side-nav">
        <button className="nav-btn" onClick={handleSlideIn}>
          <NavLink
            to="/Stackoverflow-frontend/"
            className="side-nav-links"
            activeClassName="active">
            <p>Home</p>
          </NavLink>
        </button>
        <nav className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={handleSlideIn} className="nav-btn">
            <NavLink
              to="/Stackoverflow-frontend/Questions"
              className="side-nav-links"
              activeClassName="active"
              style={{ paddingLeft: "40px" }}>
              <img src={Globe} alt="globe" className="image-globe" />
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
