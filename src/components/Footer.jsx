import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <footer 
        style={{
          background: 'linear-gradient(90deg, #2c3e50, #4c6a92)', // Darker gradient for footer contrast
          color: '#fff',
        }} 
        className="py-5 mt-5"
      >
        <Container className="text-center">

          {/* Social Icons */}
          <div className="mb-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
            >
              <FaGithub />
            </a>
            <a 
              href="https://wa.me/917078177758" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Tagline */}
          <h5 className="fw-bold mb-3" style={{ letterSpacing: '1px', fontSize: '18px' }}>
            Empowering Your Digital Presence with Innovation & Passion 🚀
          </h5>

          {/* Footer Text */}
          <p style={{ fontSize: '14px', opacity: '0.8' }}>
            © {new Date().getFullYear()} Antra's WebSolution | Designed & Developed with ❤️
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
