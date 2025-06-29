import React, { useRef, useState, useEffect } from 'react';
import './Carousel3D.css';

const cards = [
  { id: 1, title: 'Grupos Reducidos', image: '/images/021.jpg' },
  { id: 2, title: 'Recorrido Privado', image: '/images/021.jpg' },
  { id: 3, title: 'Experiencia Exclusiva', image: '/images/021.jpg' },
  { id: 4, title: 'Aventura Segura', image: '/images/021.jpg' },
  { id: 5, title: 'Momentos Únicos', image: '/images/021.jpg' },
];

export default function Carousel3D() {
  const [angle, setAngle] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startAngle.current = angle;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    setAngle(startAngle.current + delta * 0.3);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="carousel-3d-wrapper" onMouseDown={handleMouseDown}>
      <div
        className="carousel-3d"
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {cards.map((card, i) => (
          <div
            className="carousel-3d-card"
            key={card.id}
            style={{
              transform: `rotateY(${i * (360 / cards.length)}deg) translateZ(350px)`
            }}
          >
            <img src={card.image} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
