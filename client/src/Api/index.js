import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
//user routes in frontend
export const login = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

//questions routes in frontend
export const postQuestion = (questionData) =>
  API.post("/question/Ask", questionData);
export const getAllQuestions = () => API.get("/question/get");
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`);

//questions routes in frontend
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { id, answerId, noOfAnswers });
