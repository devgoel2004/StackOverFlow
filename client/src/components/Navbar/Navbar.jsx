import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assests/images.png";
import search from "../../assests/search.svg";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import { jwtDecode } from "jwt-decode";
import { FaBars } from "react-icons/fa";
import toast from "react-hot-toast";
const Navbar = ({ setIsOpen, handleSlideIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUserReducer);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully");
    navigate("/Stackoverflow-frontend/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = jwtDecode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button
          className="slide-in-icon"
          onClick={() => {
            handleSlideIn();
          }}>
          <FaBars />
        </button>
        <div className="navbar-1">
          <Link to="/Stackoverflow-frontend/" className="nav-item nav-logo">
            <img src={Logo} alt="logo" />
          </Link>
          <Link
            to="/Stackoverflow-frontend/"
            className="nav-items nav-item nav-btn res-nav">
            About
          </Link>
          <Link
            className="nav-item nav-items nav-btn res-nav"
            onClick={() => setIsOpen((prev) => !prev)}>
            Chatbot
          </Link>
          <Link
            to="/Stackoverflow-frontend/"
            className="nav-items nav-item nav-btn res-nav">
            Products
          </Link>
          <Link
            to="/Stackoverflow-frontend/"
            className="nav-items nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input
              type="text"
              className="nav-items"
              placeholder="Search ...."
            />
            <img
              src={search}
              alt="search"
              width="18"
              className="search-icon nav-items"
            />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link
              to="/Stackoverflow-frontend/Auth"
              className="nav-item nav-links ">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%">
                <Link
                  to={`/Stackoverflow-frontend/User/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}>
                  {User?.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
