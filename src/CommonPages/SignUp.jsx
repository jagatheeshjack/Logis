import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import plane from '../assets/img/Plane.png';

function FlyingAirplaneScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(120deg,rgb(252, 212, 125) 0%, #fbbf24 100%)',
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
        src={plane}
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
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    shippingType: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every(Boolean)) {
      setError('');
      // Handle sign up logic here
      navigate('/');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '5%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <FlyingAirplaneScene />
      <div style={{
        zIndex: 10,
        maxWidth: 400,
        width: '100%',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        borderRadius: 16,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h4 className="mb-3 text-center">Sign Up</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="phone" className="form-label">Phone No</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 100%' }}>
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" name="city" value={form.city} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" name="state" value={form.state} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" name="zip" value={form.zip} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text" className="form-control" id="country" name="country" value={form.country} onChange={handleChange} required />
            </div>
            <div style={{ flex: '1 1 100%' }}>
              <label htmlFor="shippingType" className="form-label">Shipping Type</label>
              <select className="form-control" id="shippingType" name="shippingType" value={form.shippingType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Standard">Standard</option>
                <option value="Express">Express</option>
                <option value="Overnight">Overnight</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
        </form>
        <div className="mt-3 text-center">
          <a href="/" className="small text-decoration-none">&larr; Back to Home Page</a>
          <span style={{ margin: '0 8px' }}></span>
          <a href="/login" className="small text-decoration-none">Already have an account? Login</a>
          <span style={{ margin: '0 8px' }}></span>
          <a href="/forgot-password" className="small text-decoration-none">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
