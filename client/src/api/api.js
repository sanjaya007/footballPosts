import axios from "axios";

const URL = "http://localhost:7000/posts";

const addPostsAPI = (value) => axios.post(URL, value);
const getPostsAPI = () => axios.get(URL);
const updatePostsAPI = (id, value) => axios.patch(`${URL}/${id}`, value);

export { addPostsAPI, getPostsAPI, updatePostsAPI };
