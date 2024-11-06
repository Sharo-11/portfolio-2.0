// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './styles/Projects.css';

const projectData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "/assets/images/project1.jpg",
    projectLink: "https://project1-link.com"
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "/assets/images/project2.jpg",
    projectLink: "https://project2-link.com"
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    imageUrl: "/assets/images/project3.jpg",
    projectLink: "https://project3-link.com"
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
