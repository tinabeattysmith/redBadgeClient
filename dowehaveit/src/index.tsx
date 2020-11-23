import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import LogIn from './components/registerLogInOut/LogIn';
import Register from './components/registerLogInOut/Register';
import NotFound from './components/static/NotFound';

const routing = (
  <BrowserRouter>
    <div>
      <h3>Do We Have It?</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/login">LogIn</Link>
        </li>
        <li>
          <Link to="/user/register">Register</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user/login" component={LogIn} />
        <Route exact path="/user/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
 
ReactDOM.render(routing, document.getElementById('root'));