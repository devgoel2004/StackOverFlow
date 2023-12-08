import axios from "axios";
const API = axios.create({
  baseURL: "https://stack-over-flow-backend-black.vercel.app/",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
//user routes in frontend
export const login = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

//questions routes in frontend
export const postQuestion = (questionData) =>
  API.post("/question/Ask", questionData);
export const getAllQuestions = () => API.get("/question/get");
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/question/vote/${id}`, { value, userId });
//answer routes in frontend
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

//Users
export const fetchAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`user/update/${id}`, updateData);
