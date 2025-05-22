import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full blur-2xl opacity-40 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-tl from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-25"></div>

      {/* Content */}
      <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">
        Valeria Vega Herrera
      </h1>

      <p className="text-lg md:text-xl">
        👋 Hi, I'm Valeria Vega Herrera
      </p>
      <p className="text-lg md:text-xl mb-6">
        A Junior Developer with a Creative Soul ✨
      </p>

      <p className="italic text-sm md:text-base text-gray-300 max-w-lg">
        🎵 Fun Fact: I’m a huge Beatles fan. <br />
        "Let it be" may or may not be my error-handling philosophy.
      </p>
    </section>
  );
}
