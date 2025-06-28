import React from 'react';
import './Hero.css';
import BubbleText from './BubbleText';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating Bubbles */}
      <div className="bubbles-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        {/* Navigation Bubbles */}
        <div className="nav-bubble projects-bubble" data-target="projects">Projects</div>
        <div className="nav-bubble skills-bubble" data-target="skills">Skills</div>
        <div className="nav-bubble about-bubble" data-target="about">About</div>
        <div className="nav-bubble contact-bubble" data-target="contact">Contact</div>
      </div>

      {/* Glass Card Content */}
      <div className="hero-card">
        <BubbleText text={`Valeria Vega\nHerrera`} />
        <p className="hero-subtitle">Junior Developer & UI/UX Enthusiast</p>
        <p className="hero-subtitle">Passionate about building sleek interfaces and intuitive experiences!</p>
        <p className="hero-funfact"></p>
      </div>
    </section>
  );
}
