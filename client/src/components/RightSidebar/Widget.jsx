import React from "react";
import "./RightSidebar.css";
import comment from "../../assests/comment-solid.svg";
import pen from "../../assests/pen-solid.svg";
import stack from "../../assests/stack-overflow.svg";
const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Observability is key in the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>Please welcome Valued Associates: #958-V2Blast#959 - SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={stack} alt="stackoverflow" width="18" />
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>How Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>
            38 Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>
            20 What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14 Is a link to the "How to Ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
