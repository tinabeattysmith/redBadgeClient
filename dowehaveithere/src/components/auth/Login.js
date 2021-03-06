import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../../helpers/environment";
// import Register from "../auth/Register";

class Login extends Component {
  constructor(props) {
    super(props);
    //set initial state of username and password as empty string
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    fetch(`${APIURL}user/login`, {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.setToken(data.token);
        console.log(data.message);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input
              id="li_userName"
              type="text"
              name="userName"
              placeholder="Enter your username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="li_password"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
        {/* <p>
          Don't have an account?
          <Link to="user/Register"> Click here to create one.</Link>
        </p> */}
      </div>
    );
  }
}
export default Login;
