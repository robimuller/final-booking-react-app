import React from 'react';
import logo from './lemon.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
