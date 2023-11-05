import * as Api from "../Api";
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await Api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await Api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
