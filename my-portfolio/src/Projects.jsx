// src/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-400 mb-8">📚 Projects</h2>

      {/* Student Path */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-red-300 mb-2">Student Path</h3>
        <ul className="list-disc ml-6 text-blue-400 underline">
          <li><a href="#">📄 Student Records</a></li>
          <li><a href="#">🤖 Chatbot App</a></li>
        </ul>
        <p className="mt-2 text-sm text-gray-300">
          <strong>Tech:</strong> Python, Streamlit, MySQL
        </p>
        <p className="mt-4 text-gray-200">
          A project built to help our university organize years’ worth of scattered student data across CSV files and Excel sheets. I developed a chatbot that answered questions like: "What are this student’s grades?" or "What subjects has this student taken?" It made data accessible with just a message.
        </p>
        <p className="mt-2 text-indigo-300">💡 My favorite part: watching the bot turn chaos into calm.</p>
      </div>

      {/* STAMP */}
      <div>
        <h3 className="text-2xl font-semibold text-red-300 mb-2">STAMP</h3>
        <p className="text-yellow-300">🪪 Campus Exit Pass App</p>
        <p className="mt-1 text-sm text-gray-300">
          <strong>Tech:</strong> React, Tailwind, TypeScript, PostgreSQL
        </p>
        <p className="mt-4 text-gray-200">
          An internal campus app to manage student exit permissions. I built the UI/UX and logic for generating digital passes, including hour, reason, and approval status. The app made it easy for staff to review and approve requests quickly and securely.
        </p>
        <p className="mt-2 text-indigo-300">🎟️ I loved working on the ticket design and logic to handle approvals visually.</p>
      </div>
    </section>
  );
}

export default Projects;
