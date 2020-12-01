import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Home/Header';
import RouteBar from './components/Home/RouteBar';
import Footer from './components/Home/Footer';
import {BrowserRouter as Router, } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <h1>App</h1>
      {/* <Router>
        <RouteBar />
      </Router> */}
      <Footer />
     
    </div>
  );
}

export default App;
