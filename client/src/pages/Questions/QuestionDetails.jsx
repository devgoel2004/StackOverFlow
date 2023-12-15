import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import upVotes from "../../../src/assests/upvotes.svg";
import downVotes from "../../../src/assests/downvotes.svg";
import "./Question.css";
import moment from "moment";
import copy from "copy-to-clipboard";
import { useDispatch } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useSelector } from "react-redux";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from "../../actions/question";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import Editor from "../../components/Editor/Editor";

const QuestionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const questionsList = useSelector((state) => state.questionsReducer);
  const url = "https://devgoel2004.github.io/stackoverflow-frontend/";
  const [answer, setAnswer] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      toast.error("Login or signup to answer a question");
      navigate("/Stackoverflow-frontend/Auth");
    } else {
      if (answer === "") {
        toast.error("Enter an answer before submit");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
        setAnswer("");
      }
    }
  };
  //function to handle Up Vote
  const handleUpVote = () => {
    if (User === null) {
      toast.error("Please login or Signup to answer a question");
      navigate("/Stackoverflow-frontend/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote", User.result._id));
    }
  };
  //function to handle Down Vote
  const handleDownVote = () => {
    if (User === null) {
      toast.error("Login or signup to down vote a question");
      navigate("/Stackoverflow-frontend/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote", User.result._id));
    }
  };
  //functionality to delete and share the question
  const handleShare = () => {
    copy(url + location.pathname);
    toast.success(`copied url: ${url}${location.pathname}`);
  };
  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
    toast.success("Question deleted");
  };
  const now = new Date();
  const hours = now.getHours();
  return (
    <div
      className={
        hours >= 18 || hours <= 5
          ? `question-details-page-dark`
          : `question-details-page`
      }>
      {questionsList.data === null ? (
        <Loader />
      ) : (
        <>
          {questionsList.data
            .filter((ques) => ques._id === id)
            .map((ques) => (
              <div key={ques._id}>
                <section className="question-details-container">
                  <h1 style={{ marginTop: "50px" }}>{ques.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        width="18"
                        src={upVotes}
                        alt="upvotes"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{ques.upVote.length - ques.downVote.length}</p>
                      <img
                        width="18"
                        src={downVotes}
                        alt="downvotes"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">
                        {HTMLReactParser(ques.questionBody)}
                      </p>
                      <div className="question-details-tags">
                        {ques.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?.id === ques?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>
                            asked {moment(ques.postedOn).fromNow()}{" "}
                            {ques.userPosted}
                          </p>
                          <Link
                            to={`/stackoverflow-frontend/User/${ques.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}>
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {ques.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{ques.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {ques.noOfAnswers !== 0 && (
                  <section>
                    <h3>{ques.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={ques._id}
                      ques={ques}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAnswer(e, ques.answer.length);
                    }}>
                    <div>
                      <Editor value={answer} onChange={setAnswer} />
                    </div>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {ques.questionTags.map((tag) => (
                      <Link
                        to="/stackoverflow-frontend/tags"
                        key={tag}
                        className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/stackoverflow-frontend/AskQuestion"
                      style={{
                        textDecoration: "none",
                        color: "#009dff",
                      }}>
                      {" "}
                      Ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
