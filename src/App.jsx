import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const topics = [
    'Inteligencia Artificial',
    'Realidad Virtual y Aumentada',
    'Tecnología en la Educación',
  ];

  const handleButtonClick = (index) => {
    setActiveButton(index);
    navigate(`/projects/${index}`);
  };

  const handleLogoClick = () => {
    setActiveButton(null);
    navigate('/');
  };

  //Control activeButton con URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const topicIndex = pathSegments[2];

    if (location.pathname === '/') {
      setActiveButton(null);
    } else if (topicIndex) {
      setActiveButton(parseInt(topicIndex, 10));
    }
  }, [location.pathname]);

  const isHomePage = activeButton === null;

  return (
    <div className="App">
      <NavBar onLogoClick={handleLogoClick} />

      <main>
        {isHomePage && (
          <>
            <div className="Image-container">
              <img src="/wide2.png" className="App-image" alt="Feria" />
              <p className="App-text">Explora los temas de tu interés:</p>
            </div>

            <div className="Button-group">
              {topics.map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={`App-button ${activeButton === index ? 'active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="Auspician-text">Auspician:</p>
            <div className="Sponsor-images">
              <img src="/scotia.png" alt="Scotia" />
              <img src="/ntt.png" alt="NTT" />
              <img src="/soft.png" alt="Soft" />
              <img src="/social.png" alt="Social" />
            </div>
            <img src="/inf.png" alt="UTFSM" className="UTFSM" />
          </>
        )}

        {!isHomePage && (
          <div className="Button-group">
            {topics.map((label, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`App-button ${activeButton === index ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </main>

      <Routes>
        <Route path="/projects/:topicIndex" element={<ProjectPage topics={topics} />} />
        <Route path="/project/:topicIndex/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

function ProjectPage({ topics }) {
  const { topicIndex } = useParams();
  const topic = topics[topicIndex];

  return <Projects topic={topic} topicIndex={topicIndex} />;
}

export default App;
