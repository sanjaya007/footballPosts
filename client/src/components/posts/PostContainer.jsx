import React from "react";
import PostItem from "./PostItem";
import NoPost from "./NoPost";
import "../../css/posts.css";
import { useSelector } from "react-redux";

const PostContainer = ({ setCurrentId }) => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  return (
    <div className="list-box">
      {!posts.length ? (
        <NoPost />
      ) : (
        posts.map((val, index) => (
          <PostItem key={index} info={val} setCurrentId={setCurrentId} />
        ))
      )}
    </div>
  );
};

export default PostContainer;
