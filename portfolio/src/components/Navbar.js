import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle menu state on hamburger click
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className='logo'>
        <a href="#hero" className="name">Sharvari.</a>
      </div>
      {/* Hamburger Menu for mobile screens */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Nav links with active class based on menu state */}
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
