import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
const HomeMainbar = () => {
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    // function to check that user has been signed in or not.
    if (!user) {
      alert("Login or signup to ask a question");
      navigate("/Stackoverflow-frontend/Auth");
    } else {
      navigate("/Stackoverflow-frontend/AskQuestion");
    }
  };
  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <>
        {questionsList.data === null ? (
          <Loader />
        ) : (
          <>
            <p>{questionsList?.data?.length} questions</p>
            <QuestionList questionsList={questionsList?.data} />
          </>
        )}
      </>
    </div>
  );
};

export default HomeMainbar;
