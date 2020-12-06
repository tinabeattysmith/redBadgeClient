import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import components
import Login from "./components/auth/Login";
import Auth from "./components/auth/Auth";
import Header from "./components/static/Header";
import Home from "./components/home/Home";

class App extends Component {
  constructor() {
    super();
    // sets initial state of sessionToken
    this.state = {
      sessionToken: "",
    };
    // this.state = {
    //   isAuthenticated: false,
    // };
  }

  // function - grabs token from session storage if it exists and sets the state of sessionToken = token
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  // function - takes in token and uses it to set the state of sessionToken = token
  setSessionState = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  };

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("token") ? (
      <Home sessionToken={this.state.sessionToken} />
    ) : (
      <Auth setToken={this.setSessionState} />
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header clickLogout={this.logout} />
          {this.protectedViews()}
        </Router>
      </div>
    );
  }
}

export default App;
