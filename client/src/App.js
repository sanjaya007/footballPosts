import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/header/Header";
import PostContainer from "./components/posts/PostContainer";
import FormBox from "./components/form/FormBox";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={10} className="mx-auto">
            <Header />
            <Container fluid>
              <Col md={12} className="mx-auto">
                <Row>
                  <Col md={8}>
                    <PostContainer />
                  </Col>
                  <Col md={4} className="p-1">
                    <FormBox />
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
