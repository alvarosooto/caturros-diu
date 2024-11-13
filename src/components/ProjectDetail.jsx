import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import projectsData from '../data/projectsData';

function ProjectDetail() {
  const { topicIndex, projectId } = useParams();
  const topic = Object.keys(projectsData)[topicIndex];
  const project = projectsData[topic][projectId];

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(project.description);
  const [image, setImage] = useState(project.image);
  const [previewImage, setPreviewImage] = useState(project.image);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setImage(file);
    }
  };

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    project.description = description;
    project.image = previewImage;
    setIsEditing(false);
  };

  const handleNewMessageChange = (e) => setNewMessage(e.target.value);
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, newMessage.trim()]);
      setNewMessage('');
      setTimeout(() => {
        const chatBox = document.querySelector('.chat-messages');
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
      e.preventDefault();
    }
  };  

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <div className="project-page-container">
      <div className="project-detail">
        <h2>{project.title}</h2>
        <div className="image-container">
          <img src={previewImage} alt={project.title} className="project-detail-image" />
          {project.enVivo ? (
            <img src="/vivo.png" alt="En Vivo" className="overlay2" />
          ) : (
            <img src="/10.png" alt="Inicia en 10 minutos" className="overlay2" />
          )}
        </div>

        {!isEditing ? (
          <>
            <p>{description}</p>
            <button onClick={handleEditClick}>Editar</button>
          </>
        ) : (
          <div className="edit-form">
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Editar descripción"
              rows="4"
              className="edit-description"
            />
            <input type="file" onChange={handleImageChange} className="edit-image-input" />
            <button onClick={handleSaveClick}>Guardar cambios</button>
          </div>
        )}
      </div>

      <div className="chat-section">
        <h3>Chat en Vivo</h3>
        <div className="chat-messages">
          {chatMessages.map((message, index) => (
            <p key={index} className="chat-message">{message}</p>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje..."
            className="chat-input"
          />
        </div>
      </div>
    </div>
  );
}


export default ProjectDetail;
