import React from 'react';
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';

const Team = () => (
  <section id="team" className="team section">
    <div className="container section-title" data-aos="fade-up">
      <span>Our Team<br /></span>
      <h2>Our Team</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="member">
            <img src={team1} className="img-fluid" alt="" />
            <div className="member-content">
              <h4>Walter White</h4>
              <span>Web Development</span>
              <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="member">
            <img src={team2} className="img-fluid" alt="" />
            <div className="member-content">
              <h4>Sarah Jhinson</h4>
              <span>Marketing</span>
              <p>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="member">
            <img src={team3} className="img-fluid" alt="" />
            <div className="member-content">
              <h4>William Anderson</h4>
              <span>Content</span>
              <p>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
