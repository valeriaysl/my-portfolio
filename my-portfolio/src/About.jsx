// src/About.jsx
import React from 'react';

export default function About() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-red-400 mb-6">💁‍♀️ About Me</h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I'm Valeria Vega Herrera, a junior software developer with a creative heart and a curious mind. ✨
        I didn’t grow up thinking I’d be coding, but a university professor helped me discover I had
        a talent for logical thinking — and I fell in love with building things that help people.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I enjoy working with frontend and user experience, and I thrive when I get to make
        something both functional and beautiful. Whether it’s a chatbot that makes sense of chaotic student records,
        or a clean interface for exit pass approvals, I’m proud of creating experiences that make people’s lives easier.
      </p>

      <p className="text-lg text-indigo-300 italic leading-relaxed">
        Also, fun fact: I’m obsessed with The Beatles. 🎵  
        My coding philosophy? Let it be (and version-control everything).
      </p>
    </section>
  );
}
