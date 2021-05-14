import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "../../css/header.css";
import img from "../../images/football.png";

function Header() {
  return (
    <>
      <Jumbotron fluid className="jumbotron">
        <Container fluid>
          <Row>
            <Col md={6} className="flex-row-start">
              <img src={img} alt="football" />
              <h1> FOOTBALL </h1>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;
