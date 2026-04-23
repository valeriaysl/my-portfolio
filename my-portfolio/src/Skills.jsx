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
    <section className="px-6 py-12 max-w-5xl mx-auto my-6 bg-[linear-gradient(180deg,rgba(31,20,53,0.25),rgba(55,10,80,0.18))] border border-[rgba(130,80,200,0.18)] rounded-xl text-white">
  <h2 className="text-2xl font-bold text-[#e9d8ff] mb-4"><Hammer size={18} className="inline mr-2 text-[#e9d8ff]" aria-hidden="true" /> Skills & Tools</h2>
      <p className="text-[#dcd6f7] mb-6">
        Here are the technologies I've worked with and loved. Some were part of my university projects, others I explored on my own. I love discovering new ones and finding the best way to solve a problem.
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill.name} className={`px-3 py-1 rounded-full bg-[linear-gradient(90deg,rgba(120,80,200,0.12),rgba(100,60,180,0.08))] border border-[rgba(160,120,220,0.09)] font-semibold text-[#efe8ff] ${skill.color}`}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
