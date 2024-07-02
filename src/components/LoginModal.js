import React from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email:</label>
            <div className="input-wrapper">
              <span className="icon">✉️</span>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Password:</label>
            <div className="input-wrapper">
              <span className="icon">🔒</span>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <p className="forgot-details">Forgot details? </p>
      </div>
    </div>
  );
}

export default LoginModal;
