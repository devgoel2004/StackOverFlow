import React from "react";
import Questions from "./Questions";
import "./HomeMainbar.css";

const QuestionList = ({ questionsList }) => {
  const now = new Date();
  const hours = now.getHours();
  return (
    <div className={hours === 12 || hours === 5 ? `question-list-dark` : null}>
      <>
        {questionsList?.map((question) => (
          <Questions question={question} key={question.id} />
        ))}
      </>
    </div>
  );
};

export default QuestionList;
