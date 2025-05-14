import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import Header from './Header';

const Contact = () => {
  useEffect(() => {
    const scripts = [
      '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '../assets/vendor/php-email-form/validate.js',
      '../assets/vendor/aos/aos.js',
      '../assets/vendor/purecounter/purecounter_vanilla.js',
      '../assets/vendor/glightbox/js/glightbox.min.js',
      '../assets/vendor/swiper/swiper-bundle.min.js',
      '../assets/js/main.js',
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div className="contact-page">
      <Header></Header>
      <main className="main">
        <div className="page-title dark-background" style={{ backgroundImage: "url('../assets/img/page-title-bg.jpg')" }}>
          <div className="container position-relative">
            <h1>Contact</h1>
            <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Add the rest of the sections here, such as Contact Section, Google Maps, and Contact Form */}
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Logis</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra...</p>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            {/* Add other footer sections here */}
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Logis</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      <button id="back-to-top" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
};

export default Contact;