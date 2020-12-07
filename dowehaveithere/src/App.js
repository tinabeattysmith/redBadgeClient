import React, { Component } from "react";
import "./App.css";
// import components
import Auth from "./components/auth/Auth.js";
import Header from "./components/static/Header";
import Home from "./components/home/Home";
import ItemsHome from "./components/items/ItemsHome";
import AdminPortal from "./components/admin/AdminPortal";

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
        <Header clickLogout={this.logout} />
        {/* <Auth setToken={this.setSessionState} /> */}
        {/* <Home sessionToken={this.state.sessionToken} />
        <ItemsHome sessionToken={this.state.sessionToken} />
        <AdminPortal sessionToken={this.state.sessionToken} /> */}

        {this.protectedViews()}
      </div>
    );
  }
}

export default App;
