import React from 'react';
import './App.css';
import Header from './components/static/Header'
import Navigation from './components/static/Navigation';
import Content from './components/static/Content'
import Sidebar from './components/static/Sidebar'
import Footer from './components/static/Footer'

function App() {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Header />
        <Navigation />
          <div className="Row">
            <Content />
            <Sidebar />
          </div>    
          <Footer />  
      </div>
    </div>
  );
};

export default App;
