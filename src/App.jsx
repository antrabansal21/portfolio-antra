import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';  
import FixedButtons from './components/FixedButtons';
// import {Blogs} from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';

// (Placeholder pages for now)
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectEstimator from './pages/ProjectEstimator';
import ProjectAlpha from './pages/ProjectAlpha';
import BetaApp from './pages/BetaApp';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/portfolio-antra">
      <FixedButtons />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/alpha" element={<ProjectAlpha />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project-estimator" element={<ProjectEstimator />} />
          <Route path="/beta-app" element={<BetaApp />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/blog/:slug" element={<SingleBlog />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    );
  }
}

export default App;


