import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import './ProjectEstimator.css';

class ProjectEstimator extends Component {
    state = {
        step: 1,
        formData: {
            websiteType: '',
            features: [],
            integrations: [],
            domainNeeded: false,
            databaseNeeded: false,
            serverNeeded: false,
            maintenance: false,
            designPreferences: [],
            timeline: '',
        },
        estimatedCost: null,
    };

    // Cost Maps
    basePrices = { portfolio: 150, ecommerce: 500, custom: 1000 };
    featureCost = {
        contactForm: 50, blog: 70, admin: 120, payment: 150,
        seo: 100, chat: 80, gallery: 60, newsletter: 50, rating: 50, faq: 40
    };
    integrationCost = {
        whatsapp: 40, analytics: 60, email: 50, sms: 70,
        crm: 100, paymentGateway: 120, liveChat: 90, facebookPixel: 50, mapEmbed: 30
    };
    designCost = {
        darkTheme: 100, responsive: 120, animations: 80, accessibility: 60,
        minimal: 70, premiumUI: 150, microInteractions: 100, materialUI: 90, glassmorphism: 110
    };
    timelineCost = {
        urgent: 200, oneWeek: 100, twoFourWeeks: 50, oneMonth: 20
    };

    nextStep = () => this.setState({ step: this.state.step + 1 });
    prevStep = () => this.setState({ step: this.state.step - 1 });

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const { formData } = this.state;

        if (type === 'checkbox' && (name === 'features' || name === 'integrations' || name === 'designPreferences')) {
            const list = formData[name];
            const updatedList = checked ? [...list, value] : list.filter((item) => item !== value);
            this.setState({ formData: { ...formData, [name]: updatedList } });
        } else {
            this.setState({ formData: { ...formData, [name]: type === 'checkbox' ? checked : value } });
        }
    };

    addCustomInput = (field) => {
        const custom = prompt(`Enter custom ${field.slice(0, -1)}:`);
        if (custom) {
            this.setState(prev => ({
                formData: {
                    ...prev.formData,
                    [field]: [...prev.formData[field], custom]
                }
            }));
        }
    };

    calculateEstimate = () => {
        const { formData } = this.state;
        let cost = 0;

        cost += this.basePrices[formData.websiteType] || 0;
        formData.features.forEach(f => cost += this.featureCost[f] || 40);
        formData.integrations.forEach(i => cost += this.integrationCost[i] || 40);
        formData.designPreferences.forEach(d => cost += this.designCost[d] || 50);
        cost += this.timelineCost[formData.timeline] || 0;

        if (formData.domainNeeded) cost += 15;
        if (formData.databaseNeeded) cost += 100;
        if (formData.serverNeeded) cost += 120;
        if (formData.maintenance) cost += 200;

        this.setState({ estimatedCost: cost, step: 6 });
    };

    SelectionPreview = ({ formData }) => {
        const getLabel = (val) => val ? val.replace(/([A-Z])/g, ' $1') : 'None';
    
        const ServiceLabel = (key) => {
            const labels = {
                domainNeeded: 'Domain',
                databaseNeeded: 'Database',
                serverNeeded: 'Server',
                maintenance: 'Maintenance',
            };
            return labels[key] || key;
        };
    
        const selectedServices = ['domainNeeded', 'databaseNeeded', 'serverNeeded', 'maintenance']
            .filter(k => formData[k])
            .map(k => ServiceLabel(k))
            .join(', ') || 'None';
    
        return (
            <div className="mb-4 border rounded bg-light p-3">
                <h6 className="mb-3 text-primary fw-bold">
                    <i className="bi bi-ui-checks-grid me-2"></i>Current Selections
                </h6>
                <table className="table table-sm table-bordered mb-0">
                    <tbody>
                        <tr>
                            <th style={{ width: '30%' }}>Website Type</th>
                            <td>{getLabel(formData.websiteType)}</td>
                        </tr>
                        <tr>
                            <th>Features</th>
                            <td>{formData.features.length ? formData.features.join(', ') : 'None'}</td>
                        </tr>
                        <tr>
                            <th>Integrations</th>
                            <td>{formData.integrations.length ? formData.integrations.join(', ') : 'None'}</td>
                        </tr>
                        <tr>
                            <th>Services</th>
                            <td>{selectedServices}</td>
                        </tr>
                        <tr>
                            <th>Design</th>
                            <td>{formData.designPreferences.length ? formData.designPreferences.join(', ') : 'None'}</td>
                        </tr>
                        <tr>
                            <th>Timeline</th>
                            <td>{getLabel(formData.timeline)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
    

    render() {
        const { step, formData, estimatedCost } = this.state;
        const { basePrices, featureCost, integrationCost, designCost, timelineCost } = this;

        const StepIndicator = () => (
            <div className="step-indicator text-center mb-4">
                {['Details', 'Features', 'Services', 'Design', 'Timeline', 'Result'].map((label, idx) => (
                    <span key={idx} className={`step-circle ${step === idx + 1 ? 'active' : ''}`}>{idx + 1}</span>
                ))}
            </div>
        );

        return (
            <Container className="py-5 estimator-container">
                <Card className="p-4 shadow-sm">
                    <h2 className="text-center mb-3">📊 Project Estimator</h2>
                    <StepIndicator />
                    {step <= 5 && <this.SelectionPreview formData={formData} />}

                    {/* Step 1: Website Type */}
                    {step === 1 && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Website Type</Form.Label>
                                <Form.Select name="websiteType" value={formData.websiteType} onChange={this.handleChange}>
                                    <option value="">Select</option>
                                    <option value="portfolio">Portfolio</option>
                                    <option value="ecommerce">E-Commerce</option>
                                    <option value="custom">Custom Web App</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="text-end">
                                <Button variant="primary" onClick={this.nextStep} disabled={!formData.websiteType}>Next</Button>
                            </div>
                        </Form>
                    )}

                    {/* Step 2: Features */}
                    {step === 2 && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Features</Form.Label>
                                <Row>
                                    {Object.keys(featureCost).map((feature, i) => (
                                        <Col md={6} key={i}>
                                            <Card className={`feature-card ${formData.features.includes(feature) ? 'active' : ''}`}>
                                                <Card.Body>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={feature.replace(/([A-Z])/g, ' $1')}
                                                        name="features"
                                                        value={feature}
                                                        checked={formData.features.includes(feature)}
                                                        onChange={this.handleChange}
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <Button variant="outline-secondary" className="mt-2" onClick={() => this.addCustomInput('features')}>+ Add Custom Feature</Button>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={this.prevStep}>Back</Button>
                                <Button variant="primary" onClick={this.nextStep}>Next</Button>
                            </div>
                        </Form>
                    )}

                    {/* Step 3: Integrations & Services */}
                    {step === 3 && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Integrations</Form.Label>
                                <Row>
                                    {Object.keys(integrationCost).map((integration, i) => (
                                        <Col md={6} key={i}>
                                            <Card className={`integration-card ${formData.integrations.includes(integration) ? 'active' : ''}`}>
                                                <Card.Body>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={integration.replace(/([A-Z])/g, ' $1')}
                                                        name="integrations"
                                                        value={integration}
                                                        checked={formData.integrations.includes(integration)}
                                                        onChange={this.handleChange}
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <Button variant="outline-secondary" className="mt-2" onClick={() => this.addCustomInput('integrations')}>+ Add Custom Integration</Button>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <h4>Additional Services</h4>
                                <Row className="mb-3">
                                    {['domainNeeded', 'databaseNeeded', 'serverNeeded', 'maintenance'].map((service, i) => (
                                        <Col md={3} key={i}>
                                            <Card
                                                className={`service-card ${formData[service] ? 'active' : ''}`}
                                                onClick={() => this.setState({ formData: { ...formData, [service]: !formData[service] } })}
                                            >
                                                <Card.Body>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={service.replace('Needed', '')}
                                                        name={service}
                                                        checked={formData[service]}
                                                        onChange={this.handleChange}
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={this.prevStep}>Back</Button>
                                <Button variant="primary" onClick={this.nextStep}>Next</Button>
                            </div>
                        </Form>
                    )}

                    {/* Step 4: Design Preferences */}
                    {step === 4 && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Design Preferences</Form.Label>
                                <Row>
                                    {Object.keys(designCost).map((preference, i) => (
                                        <Col md={6} key={i}>
                                            <Card className={`design-card ${formData.designPreferences.includes(preference) ? 'active' : ''}`}>
                                                <Card.Body>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={preference.replace(/([A-Z])/g, ' $1')}
                                                        name="designPreferences"
                                                        value={preference}
                                                        checked={formData.designPreferences.includes(preference)}
                                                        onChange={this.handleChange}
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <Button variant="outline-secondary" className="mt-2" onClick={() => this.addCustomInput('designPreferences')}>+ Add Custom Design</Button>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={this.prevStep}>Back</Button>
                                <Button variant="primary" onClick={this.nextStep}>Next</Button>
                            </div>
                        </Form>
                    )}

                    {/* Step 5: Timeline */}
                    {step === 5 && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Timeline</Form.Label>
                                <Form.Select name="timeline" value={formData.timeline} onChange={this.handleChange}>
                                    <option value="">Select Timeline</option>
                                    <option value="urgent">Urgent</option>
                                    <option value="oneWeek">1 Week</option>
                                    <option value="twoFourWeeks">2-4 Weeks</option>
                                    <option value="oneMonth">1+ Month</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={this.prevStep}>Back</Button>
                                <Button variant="primary" onClick={this.calculateEstimate} disabled={!formData.timeline}>Calculate</Button>
                            </div>
                        </Form>
                    )}

                    {/* Step 6: Final Bill and PDF */}
                    {step === 6 && (
                        <div className="text-center">
                            <h4 className="text-success">Your Estimated Cost:</h4>
                            <div id="estimateSummary" className="mt-3">
                                <table className="table table-bordered text-start">
                                    <thead><tr><th>Item</th><th>Price ($)</th></tr></thead>
                                    <tbody>
                                        <tr><td>Website Type: {formData.websiteType}</td><td>{basePrices[formData.websiteType]}</td></tr>
                                        {formData.features.map(f => <tr key={f}><td>Feature: {f}</td><td>{featureCost[f] || 40}</td></tr>)}
                                        {formData.integrations.map(i => <tr key={i}><td>Integration: {i}</td><td>{integrationCost[i] || 40}</td></tr>)}
                                        {formData.designPreferences.map(d => <tr key={d}><td>Design: {d}</td><td>{designCost[d] || 50}</td></tr>)}
                                        {formData.domainNeeded && <tr><td>Domain</td><td>15</td></tr>}
                                        {formData.databaseNeeded && <tr><td>Database</td><td>100</td></tr>}
                                        {formData.serverNeeded && <tr><td>Server</td><td>120</td></tr>}
                                        {formData.maintenance && <tr><td>Maintenance</td><td>200</td></tr>}
                                        <tr><td>Timeline: {formData.timeline}</td><td>{timelineCost[formData.timeline]}</td></tr>
                                        <tr className="table-dark"><th>Total</th><th>${estimatedCost}</th></tr>
                                    </tbody>
                                </table>
                            </div>
                            <Button variant="success" className="mt-3" onClick={() => {
                                html2pdf().from(document.getElementById('estimateSummary')).save(`Estimate-${formData.websiteType}.pdf`);
                            }}>
                                📄 Download Estimate PDF
                            </Button>
                            <div className="mt-3">
                                <Button variant="outline-primary" onClick={() => this.setState({ step: 1, estimatedCost: null, formData: { ...this.state.formData, features: [], integrations: [], designPreferences: [] } })}>
                                    Start Over
                                </Button>
                            </div>
                        </div>
                    )}
                </Card>
            </Container>
        );
    }
}

export default ProjectEstimator;
