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
