import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
      <a href="#hero" className="name">Sharvari.</a>
      </div>
      <div className='nav-links'>
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
