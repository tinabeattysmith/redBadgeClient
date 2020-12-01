import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import NavigationBar from './components/home/NavigationBar';
import PantryItemLanding from './components/PantryItems/PantryItemLanding';
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

  render() {
  return (
    <Router>
        <div>
          <NavigationBar clickLogout={this.logout} />
              {/* passing setSessionState function as a prop to the property setToken in Auth.js, will in turn pass the prop to children register and login */}
            <Auth setToken={this.setSessionState} />
            {/* <Route exact path='/' component = {App} /> */}
            <Switch>
            <Route exact path='/item' component = {PantryItemLanding} />
          </Switch>
        </div>
    </Router>
  );
  }
}

export default App;
