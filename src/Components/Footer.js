import React from 'react';



function Footer() {
  return (
    <footer>
      <div className="container-seven">
        <div className="social-icons">
          <a href="https://github.com/HamzaZamil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/hamza-zamil/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> +962 799 599 201</p>
          <p><i className="fas fa-envelope"></i> hamzaalzamil@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Amman, Jordan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
