import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import projectsData from '../data/projectsData';

function ProjectDetail() {
  const { topicIndex, projectId } = useParams();
  const topic = Object.keys(projectsData)[topicIndex];
  const project = projectsData[topic][projectId];

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        {project.enVivo ? (
          <img src="/vivo.png" alt="En Vivo" className="overlay2" />
        ) : (
          <img src="/10.png" alt="Inicia en 10 minutos" className="overlay2" />
        )}
      </div>
      
    </div>
  );
}

export default ProjectDetail;
