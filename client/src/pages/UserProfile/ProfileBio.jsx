import React from "react";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4 style={{ marginTop: "10px" }}>Tags Watched</h4>
            <div className="user-tags-container">
              {currentProfile?.tags.map((tag) => (
                <Link
                  key={tag}
                  className="user-tags-link"
                  to="/stackoverflow-frontend/Tags">
                  <p key={tag}>{tag}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p>0 Tags Watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{HTMLReactParser(currentProfile?.about)}</p>
          </>
        ) : (
          <p>No Bio Found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
