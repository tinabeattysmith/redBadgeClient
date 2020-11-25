import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props)
        //set initial state of username and password as empty string
        this.state = {
            username: '',
            password: ''    
        };
    }

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        handleSubmit = (event) => {
            fetch("http://localhost:3000/user/register", {
                method: 'POST',
                body: JSON.stringify({user:this.state}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                // calling the setToken function with sessionToken received in the response data object
                this.props.setToken(data.token)
                console.log(data.message)
            }) 
            event.preventDefault()
        }
    render() {
        return (
            <div>
                <h1>Register</h1>
                
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                        <Label for="firstName">Firstname</Label>
                        <Input id="firstName" type="text" name="firstName" placeholder="enter First name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Lastname</Label>
                        <Input id="lastName" type="text" name="lastName" placeholder="enter Last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userName">Username</Label>
                        <Input id="userName" type="text" name="userName" placeholder="enter userName" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Register;