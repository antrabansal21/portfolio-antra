// src/pages/Services.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaGlobe, FaMobileAlt, FaServer, FaDatabase,
  FaPaintBrush, FaCogs, FaHeadset, FaTools, FaCloud
} from 'react-icons/fa';
import './Services.css';

class Services extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    };

    const servicesList = [
      {
        category: 'Web Development',
        icon: FaGlobe,
        points: [
          'Custom Website Design',
          'React.js Frontend',
          'SEO Optimization',
          'CMS Integration (WordPress, Headless CMS)',
        ],
      },
      {
        category: 'Mobile App Development',
        icon: FaMobileAlt,
        points: [
          'Cross-Platform Apps',
          'React Native & Flutter',
          'Google Play / App Store Launch',
          'Push Notifications Integration',
        ],
      },
      {
        category: 'Backend Development',
        icon: FaServer,
        points: [
          'Node.js, Express.js APIs',
          'Python Flask/Django Backend',
          'Database Setup (MongoDB, MySQL)',
          'Authentication & Authorization',
        ],
      },
      {
        category: 'UI/UX & Design',
        icon: FaPaintBrush,
        points: [
          'User-Centered Design',
          'Prototyping with Figma',
          'Responsive Interfaces',
          'Design System Creation',
        ],
      },
      {
        category: 'Support & Hosting',
        icon: FaHeadset,
        points: [
          'Technical Support & Troubleshooting',
          'Website Maintenance',
          'Cloud Hosting Setup (AWS, DigitalOcean)',
          'Migration Services',
        ],
      },
    ];

    const faqs = [
      {
        question: 'How long does a typical website take?',
        answer: 'Depending on the complexity, it usually takes 2–6 weeks from design to deployment.'
      },
      {
        question: 'Which technologies do you use?',
        answer: 'React.js, Node.js, Python, MongoDB, MySQL, Flutter, Figma and many more modern stacks.'
      },
      {
        question: 'Do you provide after-launch support?',
        answer: 'Yes, we provide ongoing maintenance, bug fixes, updates, and support packages.'
      },
    ];

    return (
      <motion.div {...fadeIn}>
        {/* Hero Section */}
        <section className="services-hero text-center py-5">
          <Container>
            <h1 className="display-5 fw-bold">Empowering Your Digital Growth 🚀</h1>
            <p className="lead mt-3">
              We offer full-cycle web, app, and software development solutions tailored to your business needs.
            </p>
            <Button variant="outline-light" href="/contact" className="mt-4">
              Get Custom Solution
            </Button>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="services-categories py-5">
          <Container>
            <h2 className="text-center mb-5">What We Do Best</h2>
            <Row className="g-4">
              {servicesList.map((service, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div
                    className="service-category-card p-4 h-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon size={40} className="mb-3 service-category-icon" />
                    <h5 className="fw-bold mb-3">{service.category}</h5>
                    <ul className="text-start ps-3">
                      {service.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* FAQs Section */}
        <section className="services-faqs py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4">FAQs</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="services-final-cta text-center py-5">
          <Container>
            <h2>Ready to Build Your Dream Project?</h2>
            <Button variant="primary" href="/contact" className="mt-3">
              Let’s Discuss
            </Button>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default Services;
