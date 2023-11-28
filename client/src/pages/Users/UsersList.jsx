import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className="userList-container">
      {users ? (
        users.map((user) => <User user={user} key={user?._id} />)
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};

export default UsersList;
