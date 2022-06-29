import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import PostContainer from "../posts/PostContainer";
import FormBox from "../form/FormBox";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
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
