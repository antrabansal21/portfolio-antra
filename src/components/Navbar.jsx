import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLaptopCode, FaHome, FaUser, FaProjectDiagram, FaServicestack, FaEnvelope } from 'react-icons/fa';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  closeMenu = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <Navbar
        expand="lg"
        sticky="top"
        expanded={this.state.expanded}
        onToggle={this.handleToggle}
        className="shadow-sm py-3"
        style={{ background: 'linear-gradient(90deg, #4e54c8, #8f94fb)' }}
      >
        <Container fluid className="px-4">
          {/* Brand Logo + Name */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center fw-bold fs-2"
            style={{
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1px'
            }}
          >
            <FaLaptopCode className="me-2" size={36} color="#ffc107" />
            <span style={{ color: '#ffffff' }}>Antra's</span>
            <span style={{ color: '#ffc107' }}> WebSolution</span>
          </Navbar.Brand>

          {/* Toggle Button on right */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold text-light">
                <FaHome className="me-1" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold text-light">
                <FaUser className="me-1" /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold text-light">
                <FaProjectDiagram className="me-1" /> Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold text-light">
                <FaServicestack className="me-1" /> Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold text-light">
                <FaEnvelope className="me-1" /> Contact
              </Nav.Link>

              <Button
                as={Link}
                to="/contact"
                onClick={this.closeMenu}
                variant="warning"
                className="ms-4 px-4 fw-bold rounded-pill"
              >
                🚀 Hire Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
