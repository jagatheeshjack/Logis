import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import GetAQuote from './components/GetAQuote';
import ServiceDetails from './components/ServiceDetails';
import StarterPage from './components/StarterPage';
import Login from './CommonPages/Login';
import SignUp from './CommonPages/SignUp';
import ForgotPassword from './CommonPages/ForgotPassword';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/starter-page" element={<StarterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
