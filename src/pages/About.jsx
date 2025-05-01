// src/pages/About.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import {
  FaRegEnvelope, FaGithub, FaLinkedin,
  FaUserTie, FaRocket, FaTools, FaRobot, FaBrain, FaMobileAlt,
  FaGraduationCap, FaTrophy, FaFileDownload, FaPenFancy
} from 'react-icons/fa';
import {
  SiReact, SiHtml5, SiCss3, SiJavascript,
  SiPython, SiNodedotjs, SiMysql, SiMongodb, SiFigma
} from 'react-icons/si';
import { motion } from 'framer-motion';
import './About.css';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

class About extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };

    const skills = [
      { name: 'React', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Machine Learning', icon: <FaRobot /> },
      { name: 'Artificial Intelligence', icon: <FaBrain /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'React Native', icon: <FaMobileAlt /> },
    ];

    const education = [
      { school: 'ABC University', degree: 'B.Sc. Computer Science', period: '2020–2023' },
      { school: 'Full-Stack Bootcamp', degree: 'Web Development', period: '2022' },
    ];

    const achievements = [
      { title: 'Hackathon Winner', org: 'XYZ Hack 2023' },
      { title: 'Dean’s List', org: 'ABC University 2021' },
    ];

    return (
      <motion.div {...fadeIn}>
        <Container className="about-page py-5" style={{ backgroundColor: "#f4f7fb" }}>

          {/* Title */}
          <h2 className="text-center mb-5">About Me</h2>

          {/* Bio & Journey */}
          <Row className="gx-4 gy-4">
            <Col md={6}>
              <Card className="shadow-sm bio-card h-100">
                <Card.Body>
                  <Card.Title><FaUserTie className="icon me-2" />My Bio</Card.Title>
                  <Card.Text>
                    I’m a self-taught web & app developer specializing in React, Node.js, and Python.
                    I love turning ideas into user-friendly applications and continually expanding my skills.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm journey-card h-100">
                <Card.Body>
                  <Card.Title><FaRocket className="icon me-2" />My Journey</Card.Title>
                  <Card.Text>
                    I began coding in 2021 with HTML/CSS/JS, learned React in 2022, then Node.js & Python in 2023,
                    and now build full-stack web & mobile apps, always striving to learn more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Timeline */}
          <h3 className="mt-5 mb-3 text-center">Timeline</h3>
          <div className="timeline-container">
            {[
              { year: '2021', text: 'Started with HTML, CSS & JavaScript', icon: <FaTools /> },
              { year: '2022', text: 'Built my first React app', icon: <SiReact /> },
              { year: '2023', text: 'Freelance projects in React & Node.js', icon: <SiNodedotjs /> },
              { year: '2024', text: 'Diving into Python & mobile app development', icon: <SiPython /> },
            ].map((item, idx) => (
              <motion.div
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">{item.text}</div>
              </motion.div>
            ))}
          </div>


          {/* Skills */}
          <h3 className="mt-5 mb-4 text-center">Tools & Skills</h3>
          <Row className="gx-4 gy-4">
            {skills.map((skill, i) => (
              <Col md={4} lg={3} key={i}>
                <motion.div
                  className="skill-card shadow-sm text-center p-4 h-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="skill-icon mb-3">{skill.icon}</div>
                  <h5 className="skill-name">{skill.name}</h5>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Education */}
          <h3 className="mt-5 mb-4 text-center">Education</h3>
          <Row className="gx-4 gy-4">
            {education.map((edu, i) => (
              <Col md={6} key={i}>
                <Card className="education-card shadow-sm h-100 p-3">
                  <Card.Body>
                    <Card.Title><FaGraduationCap className="icon me-2" />{edu.school}</Card.Title>
                    <Card.Subtitle className="text-muted">{edu.degree}</Card.Subtitle>
                    <Card.Text className="mt-2">{edu.period}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Achievements */}
          <h3 className="mt-5 mb-4 text-center">Achievements</h3>
          <ListGroup className="mb-5">
            {achievements.map((a, i) => (
              <ListGroup.Item key={i} className="achievement-item">
                <FaTrophy className="me-2 text-warning" /> <strong>{a.title}</strong> — {a.org}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Blog Preview */}
          <h3 className="mt-5 mb-4 text-center">Latest Articles</h3>
          <Row className="gx-4 gy-4 mb-5">
            {blogPosts.slice(0, 4).map((post, i) => (
              <Col md={6} key={i}>
                <BlogCard post={post} />
              </Col>
            ))}
          </Row>

          {/* Download CV */}
          <div className="text-center my-5">
            <Button variant="outline-primary" href="/assets/Your_Resume.pdf" download>
              <FaFileDownload className="me-2" />Download My CV
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="text-center contact-section mt-5">
            <h3 className="mb-3">Let’s Work Together</h3>
            <Button variant="primary" href="mailto:your.email@example.com" className="me-3">
              <FaRegEnvelope className="me-2" />Contact Me
            </Button>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </Container>
      </motion.div>
    );
  }
}

export default About;
