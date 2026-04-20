// src/About.jsx
import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto my-6 text-white bg-[linear-gradient(180deg,rgba(31,20,53,0.25),rgba(55,10,80,0.18))] border border-[rgba(130,80,200,0.18)] backdrop-blur-md rounded-xl">
  <h2 className="text-2xl font-bold text-[#e9d8ff] mb-3"><Info size={18} className="inline mr-3 text-[#e9d8ff]" aria-hidden="true" /> About Me</h2>

      <p className="text-[#dcd6f7] leading-relaxed mb-4">
          Hello my name is Valeria, I'm a Software Engineer with experience in building web applications and front-end web development.
          I enjoy working with modern frameworks and libraries to create responsive and user-friendly interfaces.
      </p>

    </section>
  );
}
