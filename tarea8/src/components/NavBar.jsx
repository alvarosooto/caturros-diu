import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function NavBar() {
  return (
    <header className="nav-bar">
      
      <Link to="/" className = "logo">
      <img src="/logo.png" className="logo-image" />
      </Link>

      <nav className="nav-links">
        <Link to="/">31a Feria de Software</Link>
        <Link to="/">Historia</Link>
        <Link to="/">Versiones Anteriores</Link>
      </nav>
    </header>
  );
}

export default NavBar;
