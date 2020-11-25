import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import Sitebar from './components/home/Navbar';
import Landing from './components/home/Landing';
import NavBar from './components/home/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    // sets initial state of sessionToken
    this.state = {
      sessionToken: ''
    }
  }

  // function - grabs token from session storage if it exists and sets the state of sessionToken = token
componentWillMount() {
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
  // if token in state matches token in localStorage (user is logged in), send user to authorized path and display Landing and pass the sessiontoken as a prop to Landing.  If the tokens do not match(user is not logged in), send the user to the authorization path (register/login).
  if (this.state.sessionToken === localStorage.getItem('token')) {
    return (
      <Switch>
        <Route path='/' exact>
          <Landing sessionToken={this.state.sessionToken} />
        </Route>
      </Switch>
    )
  } else {
    return (
      <Router>
        <div>
          <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>
    )
  }
}

  render() {
  return (
    <Router>
        <div>
          <Sitebar clickLogout={this.logout} />
          {/* passing setSessionState function as a prop to the property setToken in Auth.js, will in turn pass the prop to children register and login */}
          <Auth setToken={this.setSessionState} />
        </div>
    </Router>
  );
  }
}

export default App;
