import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>Welcome to Little Lemon Table Booking</h1>
        <p>Book a table and enjoy our delicious food and drinks</p>
        <Link to="/booking" className="btn">Reserve a table</Link>
      </div>
    </div>
  );
}

export default HeroSection;
