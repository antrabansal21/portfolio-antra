import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLaptopCode, FaRocket, FaLightbulb, FaArrowRight, FaGlobe, FaMobileAlt, FaServer, FaDatabase, FaPaintBrush, FaCogs, FaCode , FaHeadset, FaTools, FaCloud, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutImage from '../assets/aboutus.jpg';

class Home extends Component {
    render() {
        // common animation props
        const scrollAnim = {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.4 },
            transition: { duration: 0.8 }
        };

        return (
            <div className="home-page">
                <section className="hero-section text-center py-5">
                    <Container>
                        <Row>
                            <Col>
                                <motion.h1
                                    className="hero-title"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Welcome to Antra's WebSolution
                                </motion.h1>
                                <motion.p
                                    className="hero-description"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2 }}
                                >
                                    Empowering your business through innovation, creativity, and technology.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                >
                                    <Button href="/contact" variant="primary" className="cta-btn">
                                        Let's Build Something Great
                                    </Button>
                                    <Button href="/project-estimator" variant="outline-secondary" className="ms-3 cta-btn">
                                        Project Estimator
                                    </Button>
                                </motion.div>

                            </Col>
                        </Row>
                        {/* Icon Cards with scroll-trigger */}
                        <Row className="mt-5">
                            {[
                                { icon: FaLaptopCode, title: 'Creative Solutions', text: 'Building innovative and user-friendly digital experiences.', color: '#ffc107' },
                                { icon: FaRocket, title: 'Growth Driven', text: 'Helping businesses reach their full potential online.', color: '#34b7f1' },
                                { icon: FaLightbulb, title: 'Innovative Ideas', text: 'Turning creative concepts into digital masterpieces.', color: '#25d366' },
                            ].map((item, idx) => (
                                <Col md={4} key={idx}>
                                    <motion.div className="icon-container"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
                                    >
                                        <item.icon size={50} color={item.color} />
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* About Us Section */}
                <section className="about-section py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">About Us</h2>
                        </motion.div>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <motion.div {...scrollAnim} transition={{ ...scrollAnim.transition, delay: 0.2 }}>
                                    <Card className="about-card shadow-lg p-4">
                                        <Card.Body>
                                            <Card.Text>
                                                At <strong>Antra's WebSolution</strong>, we’re passionate about crafting
                                                digital experiences that not only look great but drive real results.
                                                From sleek responsive designs to robust backend solutions,
                                                our 360° approach ensures your brand stands out, converts visitors,
                                                and scales seamlessly.
                                            </Card.Text>
                                            <Button href="/about" variant="outline-light" className="about-btn">
                                                Learn More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                            <Col lg={6}>
                                <motion.div {...scrollAnim} transition={{ ...scrollAnim.transition, delay: 0.4 }}>
                                    <img
                                       src={aboutImage}
                                        alt="About Antra's WebSolution"
                                        className="img-fluid about-img shadow"
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className="projects-preview py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Featured Projects</h2>
                        </motion.div>

                        <Row className="g-4">
                            {[
                                {
                                    title: 'Dual Distributor Web Portal',
                                    img: 'projectalpha1.png',
                                    desc: 'A responsive distributor website built for a shopkeeper.',
                                    tech: ['React', 'Bootstrap', 'WhatsApp API'],
                                    link: '/projects/alpha'
                                },
                                {
                                    title: 'RetailFlow ERP System',
                                    img: 'betaapp.png',
                                    desc: 'A powerful software to manage shopkeeper operations.',
                                    tech: ['React Native', 'Node js', 'MySql'],
                                    link: '/beta-app'
                                }
                            ].map((proj, i) => (
                                <Col md={6} key={i}>
                                    <motion.div
                                        className="proj-card"
                                        {...scrollAnim}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Card className="h-100 shadow-sm border-0">
                                            <div className="proj-img-wrapper">
                                                <Card.Img
                                                    variant="top"
                                                    src={proj.img}
                                                    alt={proj.title}
                                                    className="proj-img"
                                                />
                                                <div className="proj-overlay">
                                                    <Button
                                                        as={Link}
                                                        to={proj.link}
                                                        variant="light"
                                                        className="overlay-btn"
                                                    >
                                                        View More <FaArrowRight className="ms-2" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{proj.title}</Card.Title>
                                                <Card.Text>{proj.desc}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="bg-white border-0">
                                                <small className="text-muted">{proj.tech.join(', ')}</small>
                                            </Card.Footer>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>



                <section className="services-overview py-5 bg-light">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Services We Offer</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    icon: FaGlobe,
                                    title: 'Web Development',
                                    desc: 'Modern, responsive websites using React, Bootstrap & headless CMS.',
                                },
                                {
                                    icon: FaMobileAlt,
                                    title: 'Mobile App Development',
                                    desc: 'Cross-platform apps with React Native & Flutter for iOS/Android.',
                                },
                                {
                                    icon: FaServer,
                                    title: 'Software Solutions',
                                    desc: 'Robust backend, APIs and desktop software with Node.js & Electron.',
                                },
                                {
                                    icon: FaDatabase,
                                    title: 'Backend Development (Node.js & Python)',
                                    desc: 'Scalable backend solutions using Node.js, Express, and Python for APIs and microservices.',
                                },
                                {
                                    icon: FaCode,
                                    title: 'Custom Web Applications',
                                    desc: 'Building powerful, scalable custom web apps tailored to your business workflow and logic.',
                                },
                                  
                                {
                                    icon: FaCogs,
                                    title: 'API Development',
                                    desc: 'Designing efficient and scalable RESTful APIs using Node.js and Python.',
                                },
                                // New Customer Support Services
                                {
                                    icon: FaHeadset,
                                    title: 'Technical Support',
                                    desc: 'Ongoing technical assistance and troubleshooting for your website or app.',
                                },
                                {
                                    icon: FaTools,
                                    title: 'Website Maintenance',
                                    desc: 'Regular updates, bug fixes, and performance monitoring for optimal functionality.',
                                },
                                {
                                    icon: FaCloud,
                                    title: 'Hosting Support',
                                    desc: 'Reliable hosting solutions, setup, and migration support for smooth operations.',
                                },
                            ].map((svc, i) => (
                                <Col md={4} key={i}>
                                    <motion.div
                                        className="service-card p-4 text-center h-100"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + i * 0.2 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <svc.icon size={48} className="service-icon mb-3" />
                                        <h5 className="fw-bold">{svc.title}</h5>
                                        <p className="text-muted">{svc.desc}</p>
                                        <Button
                                            as={Link}
                                            to="/services"
                                            variant="outline-primary"
                                            size="sm"
                                            className="mt-3"
                                        >
                                            Learn More
                                        </Button>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Customer Feedback Section */}
                <section className="customer-feedback py-5 bg-light">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">What Our Clients Say</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    name: 'John Doe',
                                    company: 'ABC Corp.',
                                    feedback: 'Antra’s WebSolution delivered an amazing product on time. The communication was clear, and the team understood our needs from day one.',
                                    rating: 5,
                                },
                                {
                                    name: 'Jane Smith',
                                    company: 'Tech Innovations',
                                    feedback: 'Fantastic experience! They not only built a beautiful app but also helped us optimize it post-launch. Highly recommend.',
                                    rating: 4.5,
                                },
                                {
                                    name: 'Robert Johnson',
                                    company: 'XYZ Ltd.',
                                    feedback: 'Great service! Antra’s team is very responsive and helped us improve the performance of our platform significantly.',
                                    rating: 4,
                                }
                            ].map((testimonial, idx) => (
                                <Col md={4} key={idx}>
                                    <motion.div
                                        className="testimonial-card p-4 text-center h-100"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
                                    >
                                        <FaQuoteLeft className="quote-icon" size={30} />
                                        <p className="testimonial-text">{testimonial.feedback}</p>
                                        <FaQuoteRight className="quote-icon" size={30} />
                                        <h5 className="testimonial-name">{testimonial.name}</h5>
                                        <p className="testimonial-company">{testimonial.company}</p>
                                        <div className="testimonial-rating">
                                            {"⭐".repeat(testimonial.rating)}
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/* Our Process Section */}
                <section className="our-process py-5">
  <Container>
    <motion.div {...scrollAnim}>
      <h2 className="text-center mb-4">Our Process</h2>
    </motion.div>
    <Row className="g-4 justify-content-center">
      {[
        { step: '1', title: 'Consultation', desc: 'We start by understanding your needs and goals.' },
        { step: '2', title: 'Design & Prototyping', desc: 'We create wireframes, prototypes, and user flows.' },
        { step: '3', title: 'Development', desc: 'We build your app/website using the latest technologies.' },
        { step: '4', title: 'Testing & Launch', desc: 'We perform rigorous testing to ensure a seamless launch.' },
        { step: '5', title: 'Ongoing Support', desc: 'We provide ongoing support and maintenance.' },
      ].map((process, idx) => (
        <Col md={6} lg={2} key={idx}>
          <motion.div
            className="h-100"
            {...scrollAnim}
            transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
          >
            <div className="process-step p-4 text-center d-flex flex-column justify-content-center h-100">
              <h4>{process.step}</h4>
              <h5>{process.title}</h5>
              <p>{process.desc}</p>
            </div>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</section>

            </div>
        );
    }
}

export default Home;
