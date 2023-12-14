import React from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import "./Users.css";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import User from "./User";
const Users = ({ slideIn, handleSlideIn }) => {
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        {users.length === 0 ? (
          <Loader />
        ) : (
          <div className="user-list-container">
            {users.map((user) => (
              <User user={user} key={user?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
