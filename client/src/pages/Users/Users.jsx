import React from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import { useLocation } from "react-router-dom";
import "./Users.css";
import UsersList from "./UsersList";
const Users = () => {
  const location = useLocation();
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        {location.pathname === "/Users" ? <UsersList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
