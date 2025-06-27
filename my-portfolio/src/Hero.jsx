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
      </div>

      {/* Glass Card Content */}
      <div className="hero-card">
<BubbleText text={`Valeria Vega\nHerrera`} />
        <p className="hero-subtitle">👋 Hi, I'm Valeria Vega Herrera</p>
        <p className="hero-subtitle">A Junior Developer that loves creativity ✨</p>
        <p className="hero-funfact">
          🎵 Fun Fact: I’m a huge Beatles fan. <br />
          <em>"Let it be" may or may not be my error-handling philosophy.</em>
        </p>
      </div>
    </section>
  );
}
