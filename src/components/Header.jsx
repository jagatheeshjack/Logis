import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavToggle = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center" style={{ marginRight: '0px' }}>
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Logis</h1>
        </a>
        <nav
          id="navmenu"
          className={`navmenu${mobileNavOpen ? ' navmenu-active' : ''}`}
          style={{
            display: mobileNavOpen ? 'block' : '',
          }}
        >
          <ul className="d-xl-flex flex-xl-row flex-column mb-0">
            <li><Link to="/" onClick={handleNavLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavLinkClick}>About</Link></li>
            <li><Link to="/services" onClick={handleNavLinkClick}>Services</Link></li>
            <li><Link to="/pricing" onClick={handleNavLinkClick}>Pricing</Link></li>
            <li><Link to="/contact" onClick={handleNavLinkClick}>Contact</Link></li>
            <li><Link to="/login" onClick={handleNavLinkClick}>Login</Link></li>
          </ul>
        </nav>
        <i
          className={`mobile-nav-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`}
          onClick={handleMobileNavToggle}
          style={{ cursor: 'pointer', fontSize: 28, marginLeft: 16 }}
          aria-label="Toggle navigation"
        ></i>
        <a className="btn-getstarted" href="/get-a-quote">Get a Quote</a>
      </div>
      <button id="back-to-top" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </header>
  );
};

export default Header;