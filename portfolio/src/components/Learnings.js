import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles/Learnings.css';

const Learnings = () => {
  const learningsData = [
    { id: 1, title: 'React Fundamentals', description: 'Learned how to build interactive UIs with React.' },
    { id: 2, title: 'CSS Flexbox & Grid', description: 'Mastered layout techniques to create responsive designs.' },
    { id: 3, title: 'JavaScript ES6+ Features', description: 'Familiar with the latest features in JavaScript such as arrow functions, async/await, and destructuring.' },
    { id: 4, title: 'Responsive Web Design', description: 'Developed skills to create websites that work on any device.' },
    { id: 5, title: 'Version Control with Git', description: 'Learned to manage code with Git and GitHub.' },
    { id: 6, title: 'API Integration and Fetch', description: 'Understood how to fetch data from APIs and display it dynamically.' },
    { id: 7, title: 'Node.js & Express Basics', description: 'Explored server-side programming with Node.js and Express.' },
  ];

  // State to keep track of the selected learning
  const [selectedLearning, setSelectedLearning] = useState(learningsData[0]);

  // Function to handle the click and update the selected learning
  const handleLearningClick = (learning) => {
    setSelectedLearning(learning);
  };

  return (
    <section id="learnings" className="learnings-section">
      <h2 id='title_over'>Learnings</h2>
      <div className="learnings-container">
        {/* Left Column: Timeline */}
        <div className="timeline-column">
          <VerticalTimeline>
            {learningsData.map((learning) => (
              <VerticalTimelineElement
                key={learning.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
                date="2024"
                iconStyle={{ background: '#6a0dad', color: '#fff' }}
              >
                {/* Wrapping title in a div with onClick to ensure it's clickable */}
                <div onClick={() => handleLearningClick(learning)} style={{ cursor: 'pointer' }}>
                  <h3 className="vertical-timeline-element-title">{learning.title}</h3>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Right Column: Description */}
        <div className="description-column">
          <div className="description-box">
            <h3>{selectedLearning.title}</h3>
            <p>{selectedLearning.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;
