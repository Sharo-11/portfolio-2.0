import React, { useState } from 'react';
import './styles/Achievements.css';
// import './styles/style.css'; // Assuming your styles are in these files

const Achievements = () => {
  // Achievements data
  const achievements = [
    { 
      title: 'Adaptable Expertise', 
      description: 'Versatile In Web Technologies And Proficient In Frameworks Like React, Flask, And Django', 
      imgUrl: './img/fish.jpg'
    },
    { 
      title: 'Diverse Portfolio', 
      description: 'Successful Projects Include E-Commerce Platforms And Content-Rich Agency Websites.', 
      imgUrl: './img/rose.jpg'
    },
    { 
      title: 'Passion for Excellence', 
      description: 'Driven By A Strong Creative Problem-Solving Approach And Commitment To Client Success.', 
      imgUrl: './img/snail.jpg'
    },
    { 
      title: 'Adaptability and Innovation', 
      description: 'Updated with the latest web trends, technologies, and SEO best practices to ensure that clients\' websites remain competitive and up-to-date.', 
      imgUrl: './img/orange_sky.jpg'
    },
    { 
      title: 'Project Management and Timely Delivery', 
      description: 'Our commitment to project management and timely delivery is the cornerstone of our success. We understand the importance of efficient project management in delivering exceptional web solutions.',
      imgUrl: './img/b-leaf.jpg'
    },
  ];

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(1);

  // Handle Next and Previous Button Clicks
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="section">
      <h2>Achievements</h2>      
      <div className="container">
        <div id="slide">
          {achievements.map((achievement, index) => (
            <div
              className="item"
              key={index}
              style={{
                backgroundImage: `url(${achievement.imgUrl})`,
                display: index === currentIndex ? 'block' : 'none',
              }}
            >
              <div className="content">
                <div className="name">{achievement.title}</div>
                <div className="des">{achievement.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
