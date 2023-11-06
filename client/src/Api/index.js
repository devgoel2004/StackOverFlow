import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const postQuestion = (questionData) =>
  API.post("/question/Ask", questionData);
export const getAllQuestions = () => API.get("/question/get");
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
