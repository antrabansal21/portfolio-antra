import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // ADD THIS
// import './PackageEstimator.css';

class PackageEstimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: '',
      features: [],
      design: '',
      urgency: '',
      estimate: null,
      clientEmail: '',
    };
  }

  handleCalculate = () => {
    let cost = 0;

    if (this.state.projectType === 'website') cost += 500;
    if (this.state.projectType === 'app') cost += 1000;
    if (this.state.projectType === 'software') cost += 1500;

    cost += this.state.features.length * 200;

    if (this.state.design === 'premium') cost += 500;
    if (this.state.design === 'custom') cost += 800;

    if (this.state.urgency === 'urgent') cost *= 1.2;

    this.setState({ estimate: cost }, this.sendEstimateEmail);
  }

  handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    const { features } = this.state;
    if (checked) {
      this.setState({ features: [...features, value] });
    } else {
      this.setState({ features: features.filter((f) => f !== value) });
    }
  }

  sendEstimateEmail = () => {
    const { projectType, features, design, urgency, estimate, clientEmail } = this.state;

    const templateParams = {
      to_email: clientEmail,
      project_type: projectType,
      selected_features: features.join(', '),
      design_type: design,
      urgency: urgency,
      estimated_cost: `$${estimate}`,
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Estimate sent successfully to your email!');
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send estimate. Please try again.');
    });
  }

  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    };

    return (
      <motion.div {...fadeIn}>
        <section className="estimator-page py-5">
          <Container>
            <h2 className="text-center mb-5">Project Package Estimator</h2>
            <Row className="gx-5 gy-4">
              <Col md={8}>
                <Card className="p-4 shadow">
                  <Form>
                    {/* Client Email */}
                    <Form.Group className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        onChange={(e) => this.setState({ clientEmail: e.target.value })}
                        required
                      />
                    </Form.Group>

                    {/* Project Type */}
                    <Form.Group className="mb-4">
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select 
                        onChange={(e) => this.setState({ projectType: e.target.value })}
                      >
                        <option value="">Select...</option>
                        <option value="website">Website</option>
                        <option value="app">Mobile App</option>
                        <option value="software">Software</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Features */}
                    <Form.Group className="mb-4">
                      <Form.Label>Required Features</Form.Label><br />
                      {['eCommerce', 'Admin Panel', 'User Authentication', 'Payment Gateway', 'Chat System'].map((feature, idx) => (
                        <Form.Check
                          key={idx}
                          type="checkbox"
                          label={feature}
                          value={feature}
                          onChange={this.handleFeatureChange}
                        />
                      ))}
                    </Form.Group>

                    {/* Design */}
                    <Form.Group className="mb-4">
                      <Form.Label>Design Type</Form.Label>
                      <Form.Select 
                        onChange={(e) => this.setState({ design: e.target.value })}
                      >
                        <option value="">Select...</option>
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                        <option value="custom">Custom UI/UX</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Urgency */}
                    <Form.Group className="mb-4">
                      <Form.Label>Timeline</Form.Label>
                      <Form.Check 
                        type="radio" 
                        label="Normal (Standard delivery)" 
                        name="urgency" 
                        value="normal"
                        onChange={(e) => this.setState({ urgency: e.target.value })}
                      />
                      <Form.Check 
                        type="radio" 
                        label="Urgent (Fast delivery)" 
                        name="urgency" 
                        value="urgent"
                        onChange={(e) => this.setState({ urgency: e.target.value })}
                      />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={this.handleCalculate}>
                      Calculate & Email Estimate
                    </Button>
                  </Form>
                </Card>
              </Col>

              {/* Result */}
              <Col md={4}>
                {this.state.estimate !== null && (
                  <Card className="p-4 shadow text-center">
                    <h4>Estimated Package Cost</h4>
                    <h2 className="text-success mt-3">${this.state.estimate}</h2>
                    <p className="text-muted">*This is a rough estimation. Final quote may vary after full discussion.</p>
                    <Button variant="outline-primary" href="/contact">
                      Discuss Project
                    </Button>
                  </Card>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default PackageEstimator;
