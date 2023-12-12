import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";
import toast from "react-hot-toast";
import Editor from "../../components/Editor/Editor";
const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const now = new Date();
  const hours = now.getHours();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              videos,
              userPosted: User.result.name,
              userId: User?.result?._id,
            },
            navigate
          )
        );
        toast.success("Question posted successfully");
      } else {
        toast.error("Please Enter values in all the fields");
      }
    } else {
      toast.error("Please Login to ask question");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <div
      className={
        hours < 5 || hours > 22 ? `ask-question-dark` : `ask-question`
      }>
      <div className="ask-ques-container">
        <h1>Ask A Public Question</h1>
        <form onSubmit={handleSubmit}>
          <div
            className="ask-form-container"
            style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specfic and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function to finding the index of an element in a vector"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <Editor value={questionBody} onChange={setQuestionBody} />
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}></textarea>
            </label>
            <label htmlFor="videos">
              <h4>Upload videos</h4>
              <input
                type="file"
                name="videos"
                id="videos"
                multiple
                className="form-control"
                accept=".mp4, .mkv"
                onChange={(e) => setVideos(e.target.files)}
              />
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input type="submit" value="Post Question" className="review-btn" />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
