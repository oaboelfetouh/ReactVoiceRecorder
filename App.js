import React, { useState } from 'react';
import './App.css';
import VoiceRecorder from './VoiceRecorder'
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Voice Recoding Application</h2>
        <button onClick={handleOpen}>Open Modal</button>
        <Modal show={showModal} handleClose={handleClose}>
          <h2>Press mic to record, press save to download the recording</h2>
          <VoiceRecorder/>
          <p>Thank you!</p>
        </Modal>
      </header>
    </div>
  );
}

export default App;
