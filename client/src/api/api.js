import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.AuthType = JSON.parse(
      localStorage.getItem("profile")
    ).accountType;
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

const addPostsAPI = (value) => API.post("/posts", value);
const getPostsAPI = () => API.get("/posts");
const updatePostsAPI = (id, value) => API.patch(`/posts/${id}`, value);
const deletePostsAPI = (id) => API.delete(`/posts/${id}`);
const likePostsAPI = (id) => API.patch(`/posts/like/${id}`);

const addUserAPI = (value) => API.post("/user/add", value);
const loginUserAPI = (value) => API.post("/user/login", value);

export {
  addPostsAPI,
  getPostsAPI,
  updatePostsAPI,
  deletePostsAPI,
  addUserAPI,
  loginUserAPI,
  likePostsAPI,
};
