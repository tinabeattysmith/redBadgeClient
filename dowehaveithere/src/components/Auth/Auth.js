import React from "react";
import { Container, Row, Col } from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import "./Auth.css";

// adding props to parameter
function Auth(props) {
  return (
    <Container className="auth-container">
      <Row>
        <Col md="6">
          <Register setToken={props.setToken} />
        </Col>
        <Col md="6" className="login-col">
          <Login setToken={props.setToken} />
        </Col>
      </Row>
    </Container>
  );
}
export default Auth;
