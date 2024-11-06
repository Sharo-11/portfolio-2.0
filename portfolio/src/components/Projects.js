// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './styles/Projects.css';

const projectData = [
  {
    title: "PetFam",
    description: "PetFam is a team project developed by TechNaari during a Hackathon. It serves as a platform for easy pet adoption, fostering, and donations, connecting NGOs, pet owners, adopters, and donors. With a focus on transparency and security, PetFam simplifies the process of finding, adopting, and caring for pets.",
    imageUrl: require('./assets/images/PetFam.png'),
    projectLink: "https://github.com/Sharo-11/PetFam"
  },
  {
    title: "React ChatBot",
    description: "React Simple Chatbot is a lightweight, customizable chatbot component for React applications. It enhances user engagement by enabling interactive conversations within your projects and is easy to integrate, providing a seamless communication experience.",
    imageUrl: require('./assets/images/ChatBot.png'),
    projectLink: "https://github.com/Sharo-11/ChatBot-React"
  },

  {
    title: "Carrer Otaku",
    description: "CareerOtaku is a campus-centric placement platform designed to streamline the connection between students and companies. It provides students with a seamless way to discover internships and job opportunities, while allowing companies to efficiently conduct campus hiring. Tailored for educational institutions, CareerOtaku bridges the gap between aspiring talent and industry opportunities.",
    imageUrl: require('./assets/images/CarrerOtaku.png'),
    projectLink: "https://github.com/Sharo-11/CarrerOtaku"
  }
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className='heading'>
        Projects
      </div>
      <div className='project-cards'>
      {projectData.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description} 
          imageUrl={project.imageUrl} 
          projectLink={project.projectLink} 
        />
      ))}
      </div>

    </div>
  );
};

export default Projects;
