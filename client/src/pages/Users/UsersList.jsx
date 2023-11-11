import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  const Users = users.allUsersDetails;

  return (
    <div className="userList-container">
      {Users ? (
        Users.map((user) => <User user={user} key={user?._id} />)
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};

export default UsersList;
