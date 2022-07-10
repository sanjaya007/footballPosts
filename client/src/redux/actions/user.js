import { addUserAPI, loginUserAPI } from "../../api/api";

const addUser = (value, navigate, callback) => async (dispatch) => {
  try {
    const { data } = await addUserAPI(value);
    if (data.status === "success") {
      dispatch({ type: "AUTH", payload: data });
      navigate("/");
    } else {
      dispatch({ type: "ERROR", payload: data.message });
      callback(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = (value, navigate, callback) => async (dispatch) => {
  try {
    const { data } = await loginUserAPI(value);
    console.log(data);
    if (data.status === "success") {
      dispatch({ type: "AUTH", payload: data });
      dispatch({ type: "CLEAR", action: null });
      navigate("/");
    } else {
      dispatch({ type: "ERROR", payload: data.message });
      callback(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export { addUser, loginUser };
