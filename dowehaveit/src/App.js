import React, { Component } from 'react';
import Sitebar from './components/home/Navbar';
import Auth from './components/Auth/Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
      console.log(token);
    }
}

setSessionState = (token) => {
  console.log(token);
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
}

  render() {
  return (
    <Router>
        <div>
          <Sitebar />
          {/* passing setSessionState function as a prop to the property setToken inAuth.js */}
          <Auth setToken={this.setSessionState} />
        </div>
    </Router>
  );
  }
}

export default App;
