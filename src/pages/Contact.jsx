// src/pages/Contact.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8qf0ss', 'template_85p1rie', e.target, 'uQ4nx4nVltounCMff')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send. Try again.');
      });

    e.target.reset();
  }
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
    return (
      <motion.div {...fadeIn}>
        <section className="contact-page py-5">
          <Container>
            {/* Heading */}
            <h2 className="text-center mb-5">Let's Connect</h2>

            <Row className="gx-5 gy-5">
              {/* Contact Form */}
              <Col md={6}>
                <Card className="p-4 contact-form-card shadow">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-4" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" name="user_name" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="your@email.com" name="user_email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Write your message..." name="message" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>

                </Card>
              </Col>

              {/* Contact Info + Map */}
              <Col md={6}>
                <Card className="p-4 contact-info-card shadow">
                  <h4 className="mb-4">Contact Info</h4>

                  <p><FaEnvelope className="me-2" /> antrawebsolutions@gmail.com.com</p>
                  <p><FaPhoneAlt className="me-2" /> +91-7078177758</p>
                  <p><FaMapMarkerAlt className="me-2" /> 28/302 Gudri Mansoor Khan Agra,Uttar Pradesh</p>

                  {/* Social Links */}
                  <div className="social-links mt-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-3">
                      <FaGithub size={28} />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="me-3">
                      <FaLinkedin size={28} />
                    </a>
                    <a href="https://wa.me/917078177758" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={28} />
                    </a>
                  </div>

                  {/* Calendar Booking */}
                  <div className="calendar-box mt-4">
                    <h5>Schedule a Meeting 📅</h5>
                    <Button
                      variant="outline-primary"
                      href="https://calendly.com/bansalantra21/30min"
                      target="_blank"
                      className="mt-2"
                    >
                      Book via Calendly
                    </Button>
                  </div>
                </Card>

                {/* Map Embed */}
                <Card className="mt-4 map-card shadow overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.232659195254!2d75.78981777513204!3d26.861603676674055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4ac3dbab1cf%3A0x6eb7eb9c2eea93d9!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1694498445086!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default Contact;
