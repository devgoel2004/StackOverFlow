import React from "react";
import { Link } from "react-router-dom";
import "./HomeMainbar.css";
import moment from "moment";
const Questions = ({ question }) => {
  const now = new Date();
  const hours = now.getHours();
  return (
    <>
      <div
        className={
          hours === 12 || hours === 5
            ? `display-question-container-dark`
            : `display-question-container`
        }>
        <div className="display-votes-ans">
          <p>{question?.upVote?.length - question?.downVote?.length}</p>
          <p>votes</p>
        </div>
        <div className="display">
          <p>{question?.noOfAnswers}</p>
          <p>answers</p>
        </div>
        <div className="display-question-details">
          <Link
            className="question-title-link"
            to={`/stackoverflow-frontend/Questions/${question?._id}`}>
            {question?.questionTitle?.length >
            (window.innerWidth <= 400 ? 70 : 90)
              ? question?.questionTitle.substring(
                  0,
                  window.innerWidth <= 400 ? 70 : 90 + "..."
                )
              : question?.questionTitle}
          </Link>
          <div className="display-tags-time">
            <div className="display-tags">
              {question?.questionTags?.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <p className="display-time">
              asked {moment(question?.postedOn).fromNow()}{" "}
              {question?.userPosted}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
