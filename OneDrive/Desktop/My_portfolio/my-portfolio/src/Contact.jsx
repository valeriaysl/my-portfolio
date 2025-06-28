// src/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-white text-center">
      <h2 className="text-3xl font-bold text-red-400 mb-6">📬 Contact</h2>

      <p className="text-lg text-gray-300 mb-4">
        Whether you want to talk about a project, ask me a question, or just say hi — I'm here for it!
      </p>

      <p className="text-lg text-indigo-300 font-semibold mb-8">
        Let's connect:
      </p>

      <div className="flex justify-center gap-6 flex-wrap text-white text-lg">
        <a
          href="mailto:vegaherrera2002@gmail.com"
          className="hover:text-red-300 transition"
        >
          📧 vegaherrera2002@gmail.com
        </a>

        <a
          href="https://github.com/valeriaysl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/valeriaysl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-300 transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}
