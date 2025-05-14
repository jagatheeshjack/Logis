import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/main.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import Header from './Header';
import Footer from './Footer';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';
import service5 from '../assets/img/service-5.jpg';
import service6 from '../assets/img/service-6.jpg';
import features1 from '../assets/img/features-1.jpg';
import features2 from '../assets/img/features-2.jpg';
import features3 from '../assets/img/features-3.jpg';
import features4 from '../assets/img/features-4.jpg';

const Services = () => {
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
    <div className="services-page">
      <Header />
      <main className="main">
        {/* Page Title */}
        <div className="page-title dark-background" style={{ backgroundImage: `url(${pageTitleBg})` }}>
          <div className="container position-relative">
            <h1>Services</h1>
            <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Services</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}

        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
                <div>
                  <h4 className="title">Lorem Ipsum</h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
                <div>
                  <h4 className="title">Dolor Sitema</h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
                <div>
                  <h4 className="title">Sed ut perspiciatis</h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Featured Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <span>Our Services<br/></span>
            <h2>Our ServiceS</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card">
                  <div className="card-img">
                    <img src={service1} alt="" className="img-fluid"/>
                  </div>
                  <h3>Storage</h3>
                  <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
                </div>
              </div>{/* End Card Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card">
                  <div className="card-img">
                    <img src={service2} alt="" className="img-fluid"/>
                  </div>
                  <h3><a href="#" className="stretched-link">Logistics</a></h3>
                  <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                </div>
              </div>{/* End Card Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card">
                  <div className="card-img">
                    <img src={service3} alt="" className="img-fluid"/>
                  </div>
                  <h3><a href="#" className="stretched-link">Cargo</a></h3>
                  <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                </div>
              </div>{/* End Card Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="card">
                  <div className="card-img">
                    <img src={service4} alt="" className="img-fluid"/>
                  </div>
                  <h3><a href="#" className="stretched-link">Trucking</a></h3>
                  <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                </div>
              </div>{/* End Card Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="card">
                  <div className="card-img">
                    <img src={service5} alt="" className="img-fluid"/>
                  </div>
                  <h3>Packaging</h3>
                  <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
                </div>
              </div>{/* End Card Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="card">
                  <div className="card-img">
                    <img src={service6} alt="" className="img-fluid"/>
                  </div>
                  <h3><a href="#" className="stretched-link">Warehousing</a></h3>
                  <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
                </div>
              </div>{/* End Card Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        <section id="features" className="features section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <span>Features</span>
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <img src={features1} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
                </ul>
              </div>
            </div>
            {/* Features Item */}

            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={features2} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            {/* Features Item */}

            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                <img src={features3} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                <ul>
                  <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
                </ul>
              </div>
            </div>
            {/* Features Item */}

            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
                <img src={features4} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            {/* Features Item */}

          </div>

        </section>
        {/* /Features Section */}
        {/* /Testimonials Section */}
        <Testimonials />
        {/* /Testimonials Section */}
        {/* <!-- /Faq Section --> */}
        <FAQ />
        {/* <!-- /Faq Section --> */}
        {/* You can add more sections here, but make sure they are valid JSX and use className */}
      </main>
      <button id="back-to-top" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
      <Footer></Footer>
    </div>
  );
};

export default Services;