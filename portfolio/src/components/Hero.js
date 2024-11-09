import React from 'react';
import './styles/Hero.css';
import Navbar from './Navbar';
import profileImage from './assets/images/image_01.png'; 
import backgroundImage from './assets/images/bg.jpg'; 

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="hero-container" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="background-overlay"></div>
      <Navbar />
      <div className="hero-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <a href="https://r30repa2dbw.typeform.com/to/YLSXeQkH" className="footer_target"><button className="contact-button">Contact me</button></a>
        <div className="terminal">
          <div className="terminal-header">
            <div className='folders'>
             <span className="Home">Home</span>
             <span className="File">File</span>
             <span className="View">View</span>
            </div>
            
            <div className='circles'>
              <span className="red-circle"></span>
              <span className="yellow-circle"></span>
              <span className="green-circle"></span>
            </div>
          </div>
          <div className="terminal-body">
            <p><span className="username">Sharvari@Kali</span>: Is your Digital fortress secure enough?</p>
            <p><span className="username">Sharvari@Kali</span>: Find out how my skills in cybersecurity can protect your assets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;