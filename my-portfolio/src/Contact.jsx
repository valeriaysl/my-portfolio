// src/Contact.jsx
import React from 'react';
import { MailOpen, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto my-6 text-center bg-[linear-gradient(180deg,rgba(31,20,53,0.25),rgba(55,10,80,0.18))] border border-[rgba(130,80,200,0.18)] rounded-xl text-white">
  <h2 className="text-2xl font-bold text-[#e9d8ff]"><MailOpen className="inline mr-2 text-[#e9d8ff]" size={18} aria-hidden="true" /> Contact</h2>

      <p className="text-[#dcd6f7] mt-3">
        The best way to contact me is through my email, but you can also find me on LinkedIn and Github.
      </p>

      <p className="text-[#e3d6ff] font-semibold mt-6">Let's connect:</p>

  <div className="flex justify-center gap-4 flex-wrap mt-3">
    <span className="text-[#e7deff] bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-full border border-[rgba(190,150,240,0.08)] flex items-center"><MailOpen size={16} className="inline mr-2 text-[#e7deff]" aria-hidden="true" /> vegaherrera2002@gmail.com</span>
    <a href="https://github.com/valeriaysl" target="_blank" rel="noopener noreferrer" className="text-[#e7deff] bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-full border border-[rgba(190,150,240,0.08)] hover:translate-y-[-3px] transition flex items-center"><Github size={16} className="inline mr-2 text-[#e7deff]" aria-hidden="true" /> GitHub</a>
    <a href="https://www.linkedin.com/in/valeria-vega-herrera-639b66366/" target="_blank" rel="noopener noreferrer" className="text-[#e7deff] bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-full border border-[rgba(190,150,240,0.08)] hover:translate-y-[-3px] transition flex items-center"><Linkedin size={16} className="inline mr-2 text-[#e7deff]" aria-hidden="true" /> LinkedIn</a>
  </div>
    </section>
  );
}
