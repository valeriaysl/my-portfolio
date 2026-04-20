import React, { useState } from 'react';
import './Hero.css';
import BubbleText from './BubbleText';
import InfoModal from './InfoModal';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Info, SquareChartGantt, Hammer, MailOpen } from 'lucide-react';


export default function Hero() {
  const [modal, setModal] = useState(null);

  return (
    <section className="hero-section">
      {/* Floating Bubbles */}
      <div className="bubbles-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Glass Card Content */}
      <div className="hero-card">
        <BubbleText text={`Valeria Vega\nHerrera`} />
        <p className="hero-subtitle">System Engineer</p>

        <div className="hero-buttons" role="toolbar" aria-label="Quick links">
          <button className="hero-btn" onClick={() => setModal('about')} aria-label="About">
            <Info size={18} className="text-[#efe8ff]" aria-hidden="true" />
            <span className="btn-label">About</span>
          </button>

          <button className="hero-btn" onClick={() => setModal('projects')} aria-label="Projects">
            <SquareChartGantt size={18} className="text-[#efe8ff]" aria-hidden="true" />
            <span className="btn-label">Projects</span>
          </button>

          <button className="hero-btn" onClick={() => setModal('skills')} aria-label="Skills">
            <Hammer size={18} className="text-[#efe8ff]" aria-hidden="true" />
            <span className="btn-label">Skills</span>
          </button>

          <button className="hero-btn" onClick={() => setModal('contact')} aria-label="Contact">
            <MailOpen size={18} className="text-[#efe8ff]" aria-hidden="true" />
            <span className="btn-label">Contact</span>
          </button>
        </div>
      </div>

      <InfoModal open={!!modal} onClose={() => setModal(null)}>
        {modal === 'about' && <About />}
        {modal === 'projects' && <Projects />}
        {modal === 'skills' && <Skills />}
        {modal === 'contact' && <Contact />}
      </InfoModal>
    </section>
  );
}
