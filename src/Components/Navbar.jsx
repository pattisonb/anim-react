import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-spacing">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-spacing">
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isOpen && (
            <li>
              <button className="navbar-close-button" onClick={toggleMenu}>
                Close
              </button>
            </li>
          )}
        </ul>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`} />
          <div className={`bar ${isOpen ? 'active' : ''}`} />
          <div className={`bar ${isOpen ? 'active' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
