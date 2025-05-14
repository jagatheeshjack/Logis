import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import aboutImg from '../assets/img/about.jpg';
import abouthdrBg from '../assets/img/page-title-bg.jpg';
import Header from './Header';
import Footer from './Footer';

const About = () => {
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
    <div className="about-page">
      <Header></Header>
      <main className="main">
        <div className="page-title dark-background" id='aboutheader' data-aos="fade up" style={{ backgroundImage: `url(${abouthdrBg})` }}>
          <div className="container position-relative">
            <h1>About</h1>
            <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">About</li>
              </ol>
            </nav>
          </div>
        </div>
        <section id="about" class="about section">
    
          <div class="container">

            <div class="row gy-4">

              <div class="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
                <img src={aboutImg} class="img-fluid" alt=""/>
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
              </div>

              <div class="col-lg-6 content order-last  order-lg-first" data-aos="fade-up" data-aos-delay="100">
                <h3>About Us</h3>
                <p>
                  Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-diagram-3"></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                  </li>
                  <li>
                    <i class="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                  </li>
                  <li>
                    <i class="bi bi-broadcast"></i>
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
{/* <!-- /About Section --> */}
        {/* Add the rest of the sections here, such as About Section, Stats Section, Team Section, etc. */}
      </main>
      <button id="back-to-top" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
      <Footer></Footer>
    </div>
  );
};

export default About;