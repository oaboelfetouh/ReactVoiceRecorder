import React from 'react';
import './Modal.css'; // Import some basic CSS for the modal

// Modal Component
function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        
        {children}

        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
}

export default Modal;
