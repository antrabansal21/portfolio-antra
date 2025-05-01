// src/pages/BetaApp.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Button, Badge, Carousel, Card } from 'react-bootstrap';
import { FaCheckCircle, FaLink, FaMobileAlt, FaStore, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectAlpha.css';

class BetaApp extends Component {
  render() {
    const scrollAnim = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };

    const features = [
      'Dashboard for merchant, employee & client management',
      'Stock tracking and low-stock alert system',
      'Sales and purchase billing module with invoice generation',
      'Login system with role-based access (Admin, Employee)',
      'Fully mobile-responsive with smooth UX',
      'Built with MERN Stack (MongoDB, Express, React, Node.js)'
    ];

    return (
      <motion.div {...scrollAnim}>
        {/* Hero Carousel */}
        <section className="project-hero-slider">
          <Carousel fade controls={false} indicators={false} interval={3000}>
            {[
              '/betaapp1.png',
              '/betaapp2.png',
              '/betaapp3.png',
              '/betaapp4.png',
              '/betaapp5.png',
              '/betaapp6.png',
              '/betaapp7.png',
            ].map((img, i) => (
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
            <Row className="gx-5 gy-4 align-items-center">
              <Col md={6}>
                <h2 className="mb-3">Project Overview</h2>
                <p>
                  A full-stack shopkeeper management system for handling everything from inventory to billing,
                  employees, clients, and more — all accessible from a modern web interface.
                </p>
                <div className="mb-3">
                  <Badge bg="primary" className="me-2">React</Badge>
                  <Badge bg="secondary" className="me-2">Node.js</Badge>
                  <Badge bg="dark" className="me-2">MongoDB</Badge>
                </div>
              </Col>
              <Col md={6}>
                <Card className="p-4 shadow glass-card">
                  <Card.Body className="text-center">
                    <FaStore className="fs-1 text-primary mb-3" />
                    <h5 className="fw-bold">For Whom?</h5>
                    <p>Retailers & wholesale shopkeepers needing digital control over their business</p>
                    <FaDatabase className="fs-1 text-success mb-3 mt-4" />
                    <h5 className="fw-bold">Stack</h5>
                    <p>MERN Stack • Cloud-based • Multi-user Access</p>
                  </Card.Body>
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
                <FaMobileAlt className="fs-1 text-info mb-3" />
                <h3 className="mb-3">Need a Smart App for Your Business?</h3>
                <p className="mb-4">Let’s build a system that runs your store — not just sells from it.</p>
                <Button variant="primary" size="lg" href="/contact">
                  <FaLink className="me-2" />
                  Discuss This Project
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default BetaApp;
