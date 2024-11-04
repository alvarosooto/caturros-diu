import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';



function Projects({ topic, topicIndex}) {
    const navigate = useNavigate();
    const projects = projectsData[topic] || [];
  
    const handleCardClick = (projectId) => {
      navigate(`/project/${topicIndex}/${projectId}`);
    };
  
    return (
      <div className="projects-container">
        <h2>{topic}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => handleCardClick(index)}>
                <div className="image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    {project.enVivo ? (
                        <img src="/vivo.png" alt="En Vivo" className="overlay" />
                    ) : (
                        <img src="/10.png" alt="Inicia en 10 minutos" className="overlay" />
                    )}
                </div>
                <h3 className='project-name'>{project.title}</h3>
                <div className="project-links">
                    <a href="#">VIDEO</a> | <a href="#">VER MÁS</a>
                </div>
                <p className='project-description'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Projects;
