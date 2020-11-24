import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login'
import Register from './Register'

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    {/* pass the token to Register as a prop */}
                    <Register setToken={props.setToken} />
                </Col>
                <Col md="6" className="login-col">
                <Login setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;