import React from "react";
import { Link, useParams } from "react-router-dom";
import upVotes from "../../../src/assests/upvotes.svg";
import downVotes from "../../../src/assests/downvotes.svg";
import "./Question.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
const QuestionDetails = () => {
  const { id } = useParams();

  var questionsList = [
    {
      _id: "1",
      upVote: 3,
      downVote: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["Java", "node js", "reactjs", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: "2",
      upVote: 3,
      downVote: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["Java", "node js", "reactjs", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: "3",
      upVote: 3,
      downVote: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["Java", "node js", "reactjs", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((ques) => ques._id === id)
            .map((ques) => (
              <div key={ques._id}>
                <section className="question-details-container">
                  <h1>{ques.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        width="18"
                        src={upVotes}
                        alt="upvotes"
                        className="votes-icon"
                      />
                      <p>{ques.upVote - ques.downVote}</p>
                      <img
                        width="18"
                        src={downVotes}
                        alt="downvotes"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{ques.questionBody}</p>
                      <div className="question-details-tags">
                        {ques.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {ques.askedOn}</p>
                          <Link
                            to={`/User/${ques.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}>
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {ques.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {ques.noOfAnswers !== 0 && (
                  <section>
                    <h3>{ques.noOfAnswers} answers</h3>
                    <DisplayAnswer key={ques._id} ques={ques} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input
                      type="Submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {ques.questionTags.map((tag) => (
                      <Link to="/tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{
                        textDecoration: "none",
                        color: "#009dff",
                      }}>
                      ask your own question
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
