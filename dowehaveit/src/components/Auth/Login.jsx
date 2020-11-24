import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        //set initial state of username and password as empty string
        this.state = {
            userName: '',
            password: ''    
        };
    }

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        handleSubmit = (event) => {
            fetch("http://localhost:3000/user/login", {
                method: 'POST',
                body: JSON.stringify({user:this.state}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
            }).then(
                (response) => response.json()
            ).then((data) => {
                this.props.setToken(data.token)
            }) 
            event.preventDefault()
        }

    render() {
        return (
            <div>
                <h1>Login</h1>
                
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="userName">Username</Label>
                        <Input id="li_userName" type="text" name="userName" placeholder="enter userName" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Login;