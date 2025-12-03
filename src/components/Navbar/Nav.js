import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import newlogo from '../../assets/images/logof.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={newlogo} alt="Taza Henna" className="navbar-logo" />
      <div className="navbar-links">
        <Link to="/taza-henna-website/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Nav;
