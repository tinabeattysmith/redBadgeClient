import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";

class Register extends Component {
  constructor(props) {
    super(props);
    //set initial state of firstname, lastname, username and password as empty string
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    fetch(`${APIURL}user/register`, {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // calling the setToken function with sessionToken received in the response data object
        this.props.setToken(data.token);
        console.log(data.message);
      });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Register</h1>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input
              id="userName"
              type="text"
              name="userName"
              placeholder="Enter a username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="su_password"
              type="password"
              name="password"
              placeholder="Enter a password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
        <p>
          Already have an account?
          <Link to="user/Login"> Click here to Login.</Link>
        </p>
      </div>
    );
  }
}

export default Register;
