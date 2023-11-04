import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/images.png";
import search from "../../assests/search.svg";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search ...." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
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
                to="/user"
                style={{ color: "white", textDecoration: "none" }}>
                M
              </Link>
            </Avatar>
            <butto className="nav-item nav-links">Log Out</butto>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
