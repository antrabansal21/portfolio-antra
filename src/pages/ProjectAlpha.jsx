// src/pages/ProjectAlpha.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Button, Badge, Carousel, Card } from 'react-bootstrap';
import { FaCheckCircle, FaLink, FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectAlpha.css';
import projectalpha1 from '../assets/projectalpha1.png';
import projectalpha2 from '../assets/projectalpha2.png';
import projectalpha3 from '../assets/projectalpha3.png';
import projectalpha4 from '../assets/projectalpha4.png';

const images = [projectalpha1, projectalpha2, projectalpha3, projectalpha4];


class ProjectAlpha extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };

    const features = [
      'Two-brand showcase with dedicated product sections',
      'Floating WhatsApp and Call buttons on all pages',
      'Responsive image slider with CTA overlay',
      'User-friendly and performance-optimized layout',
      'Dark-modern theme blend with minimal distractions',
      'Quick inquiry system and clean product categorization'
    ];

    return (
      <motion.div {...fadeIn}>
        {/* Hero Slider */}
        <section className="project-hero-slider">
          <Carousel fade controls={false} indicators={false} interval={3000}>
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <div className="hero-img-wrapper">
                  <img src={img} alt={`Slide ${i + 1}`} className="w-100" />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>


        {/* Overview */}
        <section className="py-5 project-overview-section">
          <Container>
            <h2 className="text-center mb-5 fw-bold">Project Overview</h2>
            <Row className="gx-5 gy-4 align-items-center">
              <Col lg={6}>
                <div className="overview-text-box">
                  <p className="mb-3">
                    This project was built for a local distributor handling two major brands.
                    The website allows seamless visibility into both brands with mobile-first responsiveness and direct inquiry buttons for customer outreach.
                  </p>
                  <h6 className="mb-2">Technologies Used:</h6>
                  <div className="mb-4">
                    <Badge bg="primary" className="me-2">React</Badge>
                    <Badge bg="secondary" className="me-2">Bootstrap</Badge>
                    <Badge bg="success">WhatsApp API</Badge>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <Card className="p-4 shadow glass-card h-100 text-center">
                  <Row className="g-3">
                    <Col xs={6}>
                      <div className="icon-box">
                        <FaLaptopCode className="fs-2 text-primary mb-2" />
                        <h6 className="fw-bold mb-1">Client</h6>
                        <p className="text-muted small">Shopkeeper / Distributor</p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">
                        <FaMobileAlt className="fs-2 text-success mb-2" />
                        <h6 className="fw-bold mb-1">Platform</h6>
                        <p className="text-muted small">Responsive Web App</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>


        {/* Features */}
        <section className="py-5 feature-section bg-light">
          <Container>
            <h2 className="text-center mb-4">Key Features</h2>
            <Row className="g-4">
              {features.map((feature, i) => (
                <Col md={6} key={i}>
                  <motion.div
                    className="feature-box p-4 rounded-4 shadow-sm bg-white h-100 d-flex"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCheckCircle className="text-success fs-4 me-3 mt-1" />
                    <div>{feature}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-5 bg-gradient position-relative">
          <Container>
            <Card className="cta-glass-card text-center mx-auto p-5">
              <Card.Body>
                <FaPaintBrush className="fs-1 text-warning mb-3" />
                <h3 className="mb-3">Want Something Like This?</h3>
                <p className="mb-4">Let’s create your brand’s digital identity together.</p>
                <Button variant="primary" size="lg" href="/contact">
                  <FaLink className="me-2" />
                  Discuss Your Project
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default ProjectAlpha;
