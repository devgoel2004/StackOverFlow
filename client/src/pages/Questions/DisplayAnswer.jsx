import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
const DisplayAnswer = ({ ques, handleShare }) => {
  return (
    <div>
      {ques.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-action-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered {ans.answeredOn}</p>
              <Link
                to={`/User/${ques.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}>
                <Avatar backgroundColor="green" color="white" px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
