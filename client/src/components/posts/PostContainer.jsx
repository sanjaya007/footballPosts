import React from "react";
import { Container } from "react-bootstrap";
import PostItem from "./PostItem";
import "../../css/posts.css";
import { useSelector } from "react-redux";

const PostContainer = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <Container className="flex-css-column">
      {posts.map((val, index) => (
        <PostItem key={index} info={val} />
      ))}
    </Container>
  );
};

export default PostContainer;
