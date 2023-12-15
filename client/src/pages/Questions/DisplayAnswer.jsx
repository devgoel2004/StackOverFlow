import React from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../actions/question";
import moment from "moment";
import toast from "react-hot-toast";
import HTMLReactParser from "html-react-parser";
const DisplayAnswer = ({ ques, handleShare }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    toast.success("Answer deleted");
  };
  return (
    <div>
      {ques.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{HTMLReactParser(ans.answerBody)}</p>
          <div className="question-action-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?.id !== ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, ques.noOfAnswers)}>
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.postedOn).fromNow()} </p>
              <Link
                to={`/stackoverflow-frontend/User/${ques.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}>
                <Avatar backgroundColor="lightgreen" px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
