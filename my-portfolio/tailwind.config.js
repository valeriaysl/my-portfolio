/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  theme: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      extend: {
        colors: {
          glass: 'rgba(255,255,255,0.03)',
          glassBorder: 'rgba(255,255,255,0.1)',
          glassShadow: 'rgba(16,18,27,0.25)',
          deepViolet: '#0F0A1E',
          accentLavender: '#C084FC',
          accentCyan: '#2DD4BF',
        },
        fontWeight: {
          normal: 400,
          semibold: 600,
          bold: 700,
        },
        fontSize: {
          'h1': '3.5rem',
          'h2': '1.5rem',
          'body': '1rem',
        },
        boxShadow: {
          glass: '0 8px 32px 0 rgba(16,18,27,0.25)',
        },
      },
  },
  safelist: [
    'bg-gradient-to-r',
    'from-yellow-400', 'via-orange-300', 'to-yellow-600',
    'from-red-400', 'to-pink-500',
    'from-emerald-400', 'to-teal-500',
    'from-sky-500', 'to-blue-700',
    'from-sky-300', 'to-indigo-500',
    'from-cyan-400', 'to-blue-600',
    'from-blue-400', 'to-indigo-600',
    'from-sky-500', 'to-indigo-700',
    'text-zinc-900', 'text-white'
  ],
  plugins: [],
};
