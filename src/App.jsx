import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      </Router>  
      </div>
  );
}

export default App;
