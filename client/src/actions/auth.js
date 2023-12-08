import * as api from "../Api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";
export const signUp = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    navigate("/Stackoverflow-frontend/");
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/Stackoverflow-frontend/");
  } catch (error) {
    console.log(error);
  }
};
