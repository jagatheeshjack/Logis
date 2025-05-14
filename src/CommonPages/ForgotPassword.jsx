import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import plane from '../assets/img/Plane.png';

function FlyingAirplaneScene() {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'absolute',
        top: '20%',
        left: 0,
        width: '100px',
        height: '100px',
        backgroundImage: `url(${plane})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('If this email exists, a password reset link will be sent.');
      setError('');
    } else {
      setError('Please enter your email address.');
      setMessage('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '10%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(120deg,rgb(253, 216, 137) 0%,rgb(251, 172, 36) 100%)', // cool blue to warm yellow

    }}>
      <FlyingAirplaneScene />
      <div style={{
        zIndex: 10,
        maxWidth: 250,
        width: '100%',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        borderRadius: 16,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h4 className="mb-3 text-center">Forgot Password</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
        <div className="mt-3 text-center">
          <a href="/" className="small text-decoration-none">&larr; Back to Home Page</a>
          <span style={{ margin: '0 8px' }}></span>
          <a href="/login" className="small text-decoration-none">Back to Login</a>
          <span style={{ margin: '0 8px' }}></span>
          <a href="/signup" className="small text-decoration-none">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;