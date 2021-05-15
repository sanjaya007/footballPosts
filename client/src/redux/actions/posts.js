import { addPostsAPI, getPostsAPI, updatePostsAPI } from "../../api/api";

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

const updatePosts = (id, value) => async (dispatch) => {
  try {
    const { data } = await updatePostsAPI(id, value);
    dispatch({ type: "UPDATE_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { addPosts, getPosts, updatePosts };
