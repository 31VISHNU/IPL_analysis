import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br><br></br>
        <div className="Button">
          <Link to="/CRUD"><button>CRUD</button></Link>
          </div>
      </header>
    </div>
  );
}

export default HomePage;
