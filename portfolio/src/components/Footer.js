import './styles/Footer.css'
import React from 'react'
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <h4>
              <p>Navi Mumbai.</p>
              <p>Maharashtra.</p>
            </h4>
          </div>
          <div className='email'>
            <FaMailBulk
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <h4>
              <p>sharodubey1312@gmail.com</p>
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Penetration Tester & Red Team Specialist.</h4>
          <p>
          A passionate cybersecurity expert dedicated to uncovering vulnerabilities and fortifying defenses. With a strong focus on penetration testing and red teaming, I utilize advanced tactics and tools to simulate real-world cyberattacks, identifying weaknesses and strengthening security posture to stay ahead of evolving threats.
          </p>
          <div className='social'>
            <a href='https://www.linkedin.com/in/sharvari-dubey-806717227/' target='_blank'>
              <FaLinkedin
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
            <a href='https://tryhackme.com/p/Sharo11' target='_blank'>
              <SiTryhackme
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
            <a href='https://github.com/Sharo-11' target='_blank'>
              <FaGithub
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer