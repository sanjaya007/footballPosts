import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import { useNavigate, useLocation } from "react-router-dom";
import PostContainer from "../posts/PostContainer";
import FormBox from "../form/FormBox";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/auth");
  }, []);

  useEffect(() => {
    if (!user) navigate("/auth");
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="main-box flex-top-row-sb">
      <div className="left-box pe-3">
        <PostContainer setCurrentId={setCurrentId} />
      </div>
      <div className="right-box">
        <FormBox currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default Home;
