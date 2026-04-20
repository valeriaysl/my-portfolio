import React, { useState } from 'react';

// Simple strict carousel: square viewport, flex track, translateX(-activeIndex*100%)
export default function Carousel({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const trackWidth = images.length * 100 + '%';
  const slidePercent = 100 / images.length;
  const transform = 'translateX(-' + activeIndex * slidePercent + '%)';

  return (
    <div className="w-full flex flex-col items-center">
      {/* Larger aspect-video container, overflow hidden, safe frame */}
      <div className="w-full aspect-video max-w-4xl min-h-[420px] bg-zinc-900/40 rounded-3xl flex items-center justify-center overflow-hidden">
        {/* Track: horizontal flex container that moves with transform */}
        <div
          style={{ display: 'flex', height: '100%', width: trackWidth, transform: transform, transition: 'transform 500ms cubic-bezier(.4,1.2,.4,1)', alignItems: 'center' }}
        >
          {images.map((src, i) => {
            const slideWidth = slidePercent + '%';
            return (
              <div key={i} style={{ flex: '0 0 ' + slideWidth, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="max-h-[90%] max-w-[90%] object-contain block mx-auto"
                  style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.22)', borderRadius: '1.5rem', background: 'rgba(0,0,0,0.04)', width: 'auto', height: 'auto' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bigger Dots: one per image, set activeIndex on click */}
      <div className="mt-8 flex items-center justify-center gap-5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={`w-5 h-5 rounded-full transition-colors duration-200 border-2 border-cyan-400 ${i === activeIndex ? 'bg-cyan-400' : 'bg-zinc-400/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
