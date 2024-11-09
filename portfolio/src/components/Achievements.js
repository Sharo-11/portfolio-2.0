import React, { useState } from 'react';
import './styles/Achievements.css';

const Achievements = () => {
  const [items, setItems] = useState([
    { backgroundImage: require('./assets/images/SANS_Webinar.jpg'), name: 'SANS Webinar', des: 'Enhanced cybersecurity knowledge through advanced techniques in threat detection and defense strategies. Covered key concepts in digital forensics and incident response.', cert_url : "https://drive.google.com/file/d/1gb211ZGlKqwCDcKHyJdN0MMDyPocuF1T/view?usp=sharing" },
    { backgroundImage: require('./assets/images/TSEC_Hackathon.jpg'), name: 'TSEC Hackathon', des: 'Collaborated with a team to develop creative solutions to real-world challenges. Focused on efficient coding practices and delivered a working prototype within a competitive timeframe.', cert_url: "https://drive.google.com/file/d/1n0UboWDNdbodq-AQVNqyWbSNO4RgqtKO/view?usp=sharing" },
  ]);

  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const prevSlide = () => {
    setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
  };
  const handleClick = (cert_url) => {
    window.location.href = cert_url;
  };
  

  return (
    <section id="achievements" className="ach-section">
      <h2>Achievements</h2>
      <div className="ach-container">
      <div id="ach-slide" className="ach-slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={`ach-item ${index === 1 ? 'ach-current' : ''}`}
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 56%, rgba(0, 0, 0, 0)), url(${item.backgroundImage})` }}
          >
            <div className="ach-content">
              <div className="ach-name">{item.name}</div>
              <div className="ach-des">{item.des}</div>
              <button onClick={() => handleClick(item.cert_url)}>View</button>
            </div>
          </div>
        ))}
      </div>
      <div className="ach-buttons">
        <button id="ach-prev" onClick={prevSlide}><i className="fa-solid fa-angle-left"></i></button>
        <button id="ach-next" onClick={nextSlide}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>      
    </section>

  );
};

export default Achievements;
