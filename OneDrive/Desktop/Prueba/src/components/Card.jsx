import React from 'react';

const Card = ({ title, image, x, y, rotation }) => {
  const style = {
    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
  };

  return (
    <div className="card" style={style}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
