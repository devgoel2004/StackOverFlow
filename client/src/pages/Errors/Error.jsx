import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-message">
      <h1>Page not found</h1>
      <h4>We're sorry, we couldn't find the page you requested</h4>
      <Link to="/stackoverflow-frontend">
        <button className="btn btn-success">Home</button>
      </Link>
    </div>
  );
};

export default Error;
