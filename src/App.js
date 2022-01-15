import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function  App() {
  return (
    <div className="web">
      <h1>Welcome To Susi Website</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signin/homepage">Homepage</Link></li>
            <li><Link to="/signin/services">Services</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>   
            <Route exact path="/signin" element={<SignIn />}/>
            <Route path="/signin/:type" element={<SignIn />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
