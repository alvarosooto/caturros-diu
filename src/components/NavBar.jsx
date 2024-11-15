import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ onLogoClick }) {
  return (
    <header className="nav-bar">
      
      <Link to="/" className="logo" onClick={onLogoClick}>
        <img src="/logo.png" className="logo-image" alt="Logo" />
      </Link>
      <Link to="/" className="logo" onClick={onLogoClick}>
        <p style={{ marginLeft: '20px'}}>Feria de Software UTFSM</p>
      </Link>
      
    
      <nav className="nav-links">
        <a target='_blank'
            rel='noreferrer' href="https://www.feriadesoftware.cl/feria/">Versiones Anteriores</a>
      </nav>
    </header>
  );
}

export default NavBar;
