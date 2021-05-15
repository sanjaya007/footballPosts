import React from "react";
import { Container } from "react-bootstrap";
import PostItem from "./PostItem";
import NoPost from "./NoPost";
import "../../css/posts.css";
import { useSelector } from "react-redux";

const PostContainer = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <Container className="flex-css-column">
      {!posts.length ? (
        <NoPost />
      ) : (
        posts.map((val, index) => (
          <PostItem key={index} info={val} setCurrentId={setCurrentId} />
        ))
      )}
    </Container>
  );
};

export default PostContainer;
