import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo-container">
        <div className="logo-icon">
          <span className="logo-letter">H</span>
        </div>
        <h1 className="logo-text">HealthCare Booking</h1>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/appointments">Your Appointments</Link>
      </nav>
    </header>
  );
};

export default Header;
