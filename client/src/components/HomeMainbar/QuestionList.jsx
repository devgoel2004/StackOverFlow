import React from "react";
import Questions from "./Questions";
import "./HomeMainbar.css";

const QuestionList = ({ questionsList }) => {
  const hours = 18;
  return (
    <div className={hours === 18 ? `question-list-dark` : null}>
      <>
        {questionsList?.map((question) => (
          <Questions question={question} key={question.id} />
        ))}
      </>
    </div>
  );
};

export default QuestionList;
