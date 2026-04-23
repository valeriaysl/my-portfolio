// ...existing code...
// src/Projects.jsx
import React from 'react';
import Carousel from './Carousel';
import {
  Database,
  Code,
  Cpu,
  Layout,
  SquareChartGantt,
} from 'lucide-react';

const TECH_META = {
  Python: { icon: Code, bg: 'bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-600', text: 'text-zinc-900' },
  Streamlit: { icon: Layout, bg: 'bg-gradient-to-r from-red-400 to-pink-500', text: 'text-white' },
  LangChain: { icon: Cpu, bg: 'bg-gradient-to-r from-emerald-400 to-teal-500', text: 'text-zinc-900' },
  MySQL: { icon: Database, bg: 'bg-gradient-to-r from-sky-500 to-blue-700', text: 'text-white' },
  React: { icon: Code, bg: 'bg-gradient-to-r from-sky-300 to-indigo-500', text: 'text-white' },
  Tailwind: { icon: Code, bg: 'bg-gradient-to-r from-cyan-400 to-blue-600', text: 'text-white' },
  TypeScript: { icon: Code, bg: 'bg-gradient-to-r from-blue-400 to-indigo-600', text: 'text-white' },
  PostgreSQL: { icon: Database, bg: 'bg-gradient-to-r from-sky-500 to-indigo-700', text: 'text-white' },
};

const projects = [
  {
    id: 'student-path',
    title: 'Student Path',
    subtitle: 'Data AI assistant for university staff',
    description:
      'This project was built to help our university organize 20+ years of records that were scattered across Excel and CSV files. We used Streamlit to create a user-friendly interface for staff, and LangChain to build an AI agent that could understand and query the data in natural language. Impact: Enabled staff to ask natural language questions and get instant student data without manual filtering.',
    tech: ['Python', 'Streamlit', 'LangChain', 'MySQL'],
    note:
      'Visuals restricted to protect sensitive student PII and University data privacy protocols.',
  },
  {
    id: 'stamp',
    title: 'STAMP',
    subtitle: 'Campus Exit Pass App',
    description:
      'An internal campus app to manage student exit permissions. I built the UI/UX and logic for generating digital passes, including hour, reason, and approval status. I loved working on the ticket design and logic to handle approvals visually.',
    tech: ['React', 'Tailwind', 'TypeScript', 'PostgreSQL'],
  },
];

function TechBadge({ name }) {
  const meta = TECH_META[name] || { icon: Code, bg: 'bg-zinc-800', text: 'text-zinc-200' };
  const Icon = meta.icon;
  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-[13px] font-bold ${meta.bg} ${meta.text} shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ring-1 ring-white/10`}>
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm">
        <Icon size={16} className="opacity-95" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}

function ProjectCard({ p }) {
  // Glassmorphism card, two-column grid
  // Always use two-column grid, right column is carousel or placeholder
  return (
    <div
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 mb-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      style={{
        '--project-title': '2.7rem',
        '--project-title-md': '3.2rem',
        '--project-subtitle': '1.5rem',
        '--project-desc': '1.25rem',
        '--project-note': '1.1rem',
      }}
    >
      {/* Left: Project Details */}
      <div>
        <h3
          className="flex items-center gap-2 font-outfit font-bold text-left text-[#e9d8ff] mb-2"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'var(--project-title)' }}
        >
          <Code size={32} className="inline text-[#e9d8ff] -ml-1 mr-2" aria-hidden="true" />
          {p.title}
        </h3>
        <h4
          className="mb-3 font-semibold text-[#cbb6ff]"
          style={{ fontSize: 'var(--project-subtitle)' }}
        >
          {p.subtitle}
        </h4>
        <p
          className="font-inter text-white/70 leading-relaxed mb-4 max-w-[60ch]"
          style={{ fontSize: 'var(--project-desc)' }}
        >
          {p.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {p.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>
        {p.note && (
          <p
            className="italic mt-2 text-[#bbaaff]"
            style={{ fontSize: 'var(--project-note)' }}
          >
            {p.note}
          </p>
        )}
      </div>

      {/* Right: Carousel or Placeholder, always present for layout consistency */}
      <div className="flex items-center justify-center w-full">
        {p.id === 'stamp' ? (
          <div className="w-full aspect-video flex items-center justify-center bg-zinc-900/40 rounded-2xl shadow-lg overflow-hidden p-4">
            <div className="w-full h-full flex items-center justify-center">
              <Carousel
                images={[
                  '/photos/Screenshot 2026-03-05 at 4.28.00\u202fPM.png',
                  '/photos/Screenshot 2026-03-05 at 4.26.51\u202fPM.png',
                  '/photos/Screenshot 2026-03-05 at 4.29.50\u202fPM.png',
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-violet-400/10 to-cyan-400/10 border border-dashed border-white/20 rounded-2xl">
            {/* Placeholder for projects without carousel */}
            <span className="text-zinc-400 text-lg">No Preview Available</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative px-6 py-16 max-w-5xl mx-auto my-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 space-y-10 ring-1 ring-cyan-400/10 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-cyan-400/10 before:to-pink-400/10 before:blur-2xl before:-z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-tight flex items-center mb-8">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cyan-300/10 mr-3">
          <SquareChartGantt size={22} className="text-cyan-300" aria-hidden="true" />
        </span>
        Projects
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
