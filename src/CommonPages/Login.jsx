import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/img/team/team-1.jpg';
import { motion } from 'framer-motion';
import plane from '../assets/img/plane.png'; // Replace with your airplane image path

function FlyingAirplaneScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(120deg,rgb(252, 212, 125) 0%, #fbbf24 100%)', // cool blue to warm yellow
        zIndex: 0,
      }}
    >
      {/* Clouds */}
      <motion.div
        style={{
          position: 'absolute',
          width: 128,
          height: 64,
          background: '#fff',
          borderRadius: 9999,
          top: 80,
          left: 0,
          opacity: 0.7,
        }}
        animate={{ x: '100vw' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 160,
          height: 80,
          background: '#fff',
          borderRadius: 9999,
          top: 240,
          left: '-10%',
          opacity: 0.6,
        }}
        animate={{ x: '110vw' }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear', delay: 5 }}
      />
      {/* Airplane */}
      <motion.img
        src={plane} // Replace with your airplane image path
        alt="Airplane"
        style={{
          width: 80,
          height: 80,
          position: 'absolute',
          pointerEvents: 'none',
        }}
        initial={{ x: '-20vw', y: '80vh', rotate: -10, scale: 0.8 }}
        animate={{
          x: '110vw',
          y: ['80vh', '50vh', '30vh', '10vh'],
          rotate: [0, 5, -5, 10],
          scale: 1,
        }}
        transition={{
          duration: 32, // Much slower flight
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setError('');
      navigate('/');
    } else {
      setError('Please enter both username and password.');
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
    }}>
      <FlyingAirplaneScene />
      <div style={{
        zIndex: 10,
        maxWidth: 300, 
        width: '100%',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        borderRadius: 16,
        padding: 16, // 50% smaller than previous 32
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="mb-4 text-center">
          <img src={profileImg} alt="Profile" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <span className="small text-decoration-none" style={{ cursor: 'pointer', color: '#0d6efd' }} onClick={() => navigate('/forgot-password')}>Forgot password?</span>
            <span className="small text-decoration-none" style={{ cursor: 'pointer', color: '#0d6efd' }} onClick={() => navigate('/signup')}>Sign up</span>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <a href="/" className="small text-decoration-none">&larr; Back to Home Page</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
