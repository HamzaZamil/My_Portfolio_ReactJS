import React from 'react';
import ahmad from '../assets/Ahmad.png'
import sami from '../assets/Sami.png'
import omar from '../assets/Omar.png'

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container-five">
        <div className="text-two">
          <h2>Testimonials</h2>
          <h1>Our customers testimonials</h1>
        </div>
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="person">
              <img src={ahmad} alt="Ahmad Azzam" />
              <div className="name">Ahmad Azzam</div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="description">
                <span>"</span> The website design is clean, and everything
                works perfectly. Highly recommend for web development and
                scripting! <span>"</span>
              </div>
            </div>
            <div className="person">
              <img src={sami} alt="Sami Yaseen" />
              <div className="name">Sami Yaseen</div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="description">
                <span>"</span> Hamza built an amazing site, and the scripting
                was top-notch. Will work with him again! <span>"</span>
              </div>
            </div>
            <div className="person">
              <img src={omar} alt="Omar" />
              <div className="name">Omar</div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="description">
                <span>"</span> It's fast, user-friendly, and his script
                writing really improved our content. <span>"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
