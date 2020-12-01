import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Register from './Register';
import './Auth.css';

// adding props to parameter
const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    {/* pass the token to Register as a prop
                    create property called setToken.  Allows to pass the token down to register 
                    props is tethered to props in line 7 and uses dot accessor to access properties from App.js*/}
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