import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <h1></h1>
          <div className="Image-container">
            <img src="/Feria.png" className="App-image" alt="Feria" />
            <p className="App-text">Explora los temas de tu interés:</p>
          </div>
          <div className="Button-group">
            {['Inteligencia Artificial', 'Realidad Virtual y Aumentada', 'Tecnología en la Educación'].map((label, index) => (
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
            <img src="/ntt.png" alt="ntt"/>
            <img src="/soft.png" alt="Scotia"  />
            <img src="/social.png" alt="Social" />
          </div>
          <img src="/inf.png" alt="UTFSM" className="UTFSM" />
          <p></p>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
