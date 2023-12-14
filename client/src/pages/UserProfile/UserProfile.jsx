import React, { useState } from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users && users.filter((user) => user._id === id);
  console.log(currentProfile);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  return (
    <>
      <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="home-container-2">
          {users ? (
            <>
              <section>
                <div className="user-details-container">
                  <div style={{ marginTop: "50px" }} className="user-details">
                    <Avatar
                      backgroundColor="purple"
                      color="white"
                      fontSize="50px"
                      px="40px"
                      py="35px">
                      {currentProfile[0]?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                      <h1 style={{ textTransform: "capitalize" }}>
                        {currentProfile[0]?.name}
                        <span
                          title="badge/rank"
                          style={{
                            fontSize: "30px",
                            color: "grey",
                            marginLeft: "5px",
                          }}>
                          <i>-{currentProfile[0]?.badge}</i>
                        </span>
                      </h1>
                      <p>
                        <FontAwesomeIcon
                          icon={faBirthdayCake}
                          style={{ marginRight: "5px" }}
                        />{" "}
                        joined on {moment(currentProfile[0].joinedOn).fromNow()}
                      </p>
                    </div>
                  </div>
                  {currentUser ? (
                    <>
                      {currentUser?.result._id === id && (
                        <button
                          type="button"
                          style={{ marginTop: "50px" }}
                          onClick={() => setSwitch(true)}
                          className="edit-profile-btn">
                          <FontAwesomeIcon icon={faPen} /> Edit Profile
                        </button>
                      )}
                    </>
                  ) : (
                    <>Not Eligible...</>
                  )}
                </div>
                <>
                  {Switch ? (
                    <>
                      <EditProfileForm
                        currentUser={currentUser}
                        setSwitch={setSwitch}
                      />
                    </>
                  ) : (
                    <>
                      <ProfileBio currentProfile={currentProfile[0]} />
                    </>
                  )}
                </>
              </section>
            </>
          ) : (
            <>
              <h1>Loading...</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
