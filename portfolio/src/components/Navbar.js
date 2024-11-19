import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className='logo'>
        <a href="#hero" className="name">Sharvari.</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${menuActive ? 'active' : ''}`}>
        <a href="#hero" className="nav-item">Home</a>
        <a href="#learnings" className="nav-item">Learnings</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#reports" className="nav-item">Reports</a>
        <a href="#achievements" className="nav-item">Achievements</a>
      </div>
    </nav>
  );
};

export default Navbar;
