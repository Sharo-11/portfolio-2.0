import React, { useState } from 'react';
import './styles/Achievements.css';

const Achievements = () => {
  const [items, setItems] = useState([
    { backgroundImage: require('./assets/images/ChatBot.png'), name: 'Adaptable Expertise', des: 'Versatile In Web Technologies And Proficient In Frameworks Like React, Flask, And Django' },
    { backgroundImage: require('./assets/images/bg.jpg'), name: 'Diverse Portfolio', des: 'Successful Projects Include E-Commerce Platforms And Content-Rich Agency Websites.' },
    { backgroundImage: require('./assets/images/ChatBot.png'), name: 'Passion for Excellence', des: 'Driven By A Strong Creative Problem-Solving Approach And Commitment To Client Success.' },
    { backgroundImage: require('./assets/images/bg.jpg'), name: 'Project Management and Timely Delivery', des: 'Our commitment to project management and timely delivery is the cornerstone of our success. We understand the importance of efficient project management in delivering exceptional web solutions.' }
  ]);

  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const prevSlide = () => {
    setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
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
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="ach-content">
              <div className="ach-name">{item.name}</div>
              <div className="ach-des">{item.des}</div>
              <button>See more</button>
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
