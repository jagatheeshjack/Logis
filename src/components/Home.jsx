import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../assets/css/main.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import worldDottedMap from '../assets/img/world-dotted-map.png';
import heroImg from '../assets/img/hero-img.svg';
import Header from './Header';
import Footer from './Footer';
import aboutImg from '../assets/img/about.jpg';
import aboutheadimg from '../assets/img/page-title-bg.jpg';
import Tracker from './Tracker';

const Home = () => {
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
      script.onload = () => console.log(`${src} loaded successfully.`);
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    });

    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
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

  const [showTracker, setShowTracker] = useState(false);
  const [trackId, setTrackId] = useState('');
  const [inputId, setInputId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setTrackId(inputId.trim());
    setShowTracker(true);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src={worldDottedMap} alt="" className="hero-bg" data-aos="fade-in" />
          <div className="container">
            <div className="row gy-4 d-flex justify-content-between">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
                <p data-aos="fade-up" data-aos-delay="100">
                  Delivering your packages across the city and beyond — on time, every time. Whether you're sending documents or large parcels, we offer trusted delivery solutions tailored to your needs.
                </p>
                <form onSubmit={handleSearch} className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                  <input type="text" className="form-control" placeholder="Enter Your Track Id" value={inputId} onChange={e => setInputId(e.target.value)} />
                  <button type="submit" className="btn btn-primary">Search</button>
                </form>
                <div className="row gy-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter">232</span>
                      <p>Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter">521</span>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" className="purecounter">1453</span>
                      <p>Support</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" className="purecounter">32</span>
                      <p>Workers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src={heroImg} className="img-fluid mb-3 mb-lg-0" alt="" />
              </div>
            </div>
          </div>
        </section>
        {showTracker && (
          <section id="tracker-section" className="section" style={{ background: '#f8fafc', padding: '32px 0' }}>
            <div className="container">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0">Track Your Package</h3>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowTracker(false)}>Close Tracker</button>
              </div>
              <Tracker trackId={trackId} />
            </div>
          </section>
        )}

        {/* About Section */}
        <section id="about" className="about section">
        <div className="page-title dark-background" style={{ backgroundImage: `url(${aboutheadimg})` }}>
            <div className="container position-relative">
              <h1>About</h1>
              <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            </div>
          </div>
          <div className="container">
            <br />

            <div className="row gy-4">
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
                <img src={aboutImg} className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
              </div>
              <div className="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
                <h3>About Us</h3>
                <p>
                  Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Voluptatem et qui exercitationem</h5>
                      <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section">
          <div className="page-title dark-background" style={{ backgroundImage: "url('../assets/img/page-title-bg.jpg')" }}>
            <div className="container position-relative">
              <h1>Services</h1>
              <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          <div className="page-title dark-background" style={{ backgroundImage: "url('../assets/img/page-title-bg.jpg')" }}>
            <div className="container position-relative">
              <h1>Pricing</h1>
              <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="page-title dark-background" style={{ backgroundImage: "url('../assets/img/page-title-bg.jpg')" }}>
            <div className="container position-relative">
              <h1>Contact</h1>
              <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button id="back-to-top" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
};

export default Home;