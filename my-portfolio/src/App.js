import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import BubbleText from './BubbleText';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
