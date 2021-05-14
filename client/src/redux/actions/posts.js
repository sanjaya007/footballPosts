import { addPostsAPI, getPostsAPI } from "../../api/api";

const addPosts = (value) => async (dispatch) => {
  try {
    const { data } = await addPostsAPI(value);
    dispatch({ type: "ADD_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await getPostsAPI();
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { addPosts, getPosts };
