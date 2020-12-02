import React, {Component} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Header from './components/home/Header';
import Home from './components/home/Home';
import RouteBar from './components/home/RouteBar';
import Footer from './components/home/Footer';
import {BrowserRouter as Router, } from 'react-router-dom'
import ItemsHome from './components/items/ItemsHome';
import MealsHome from './components/meals/MealsHome';
import ItemCreate from './components/items/ItemCreate'


class App extends Component {
  constructor() {
    super();  
    // sets initial state of sessionToken
    this.state = {
      sessionToken: ''
    }
  }
   
    // function - grabs token from session storage if it exists and sets the state of sessionToken = token
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  // function - takes in token and uses it to set the state of sessionToken = token
  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  localStorage.clear();
  }

  protectedViews = () => {
    return (this.sessionToken === localStorage.getItem('token') ? 
      <Home sessionToken={this.sessionToken}/> : <Auth setToken={this.setSessionState}/>)
    }

  render(){ 
    return (
      <div className="App">
        <Router>
          <Header clickLogout={this.props.logout}/>
          {/* <RouteBar /> */}
          {/* <Auth setToken={this.setSessionState}/> */}
          {/* <Home /> */}
          <ItemsHome />
          {/* <MealsHome /> */}
          <ItemCreate />
        </Router>     
      </div>
      );
    };
};

export default App;