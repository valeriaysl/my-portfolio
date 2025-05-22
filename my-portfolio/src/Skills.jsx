// src/Skills.jsx
import React from 'react';

const skills = [
  { name: 'React', color: 'text-cyan-300' },
  { name: 'Tailwind CSS', color: 'text-sky-300' },
  { name: 'JavaScript', color: 'text-yellow-300' },
  { name: 'TypeScript', color: 'text-blue-300' },
  { name: 'Python', color: 'text-green-300' },
  { name: 'Streamlit', color: 'text-pink-300' },
  { name: 'PostgreSQL', color: 'text-indigo-300' },
  { name: 'MySQL', color: 'text-emerald-300' },
  { name: 'Docker', color: 'text-cyan-400' },
  { name: 'Figma', color: 'text-pink-400' },
  { name: 'Unit Testing', color: 'text-purple-300' },
];

export default function Skills() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-red-400 mb-8">🛠️ Skills & Tools</h2>
      <p className="mb-6 text-gray-300">
        Here are the technologies I've worked with and loved. Some were part of my university projects, others I explored on my own. I love discovering new ones and finding the best way to solve a problem.
      </p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-4 py-2 rounded-full border border-white bg-white/5 backdrop-blur-sm text-sm font-semibold ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
