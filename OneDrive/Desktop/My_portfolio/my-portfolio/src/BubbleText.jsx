import React, { useEffect } from 'react';
import './BubbleText.css';

const BubbleText = ({ text }) => {
  useEffect(() => {
    const spans = document.querySelectorAll('.hoverText span');

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function () {
        this.classList.add('hovered');

        const left = this.previousElementSibling;
        const right = this.nextElementSibling;

        if (left && left.tagName === 'SPAN') left.classList.add('hovered-sibling');
        if (right && right.tagName === 'SPAN') right.classList.add('hovered-sibling');
      });

      span.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');

        const left = this.previousElementSibling;
        const right = this.nextElementSibling;

        if (left && left.tagName === 'SPAN') left.classList.remove('hovered-sibling');
        if (right && right.tagName === 'SPAN') right.classList.remove('hovered-sibling');
      });
    });
  }, []);

  return (
    <h1 className="hoverText">
      {text.split('').map((char, idx) =>
        char === '\n' ? <br key={idx} /> : <span key={idx}>{char}</span>
      )}
    </h1>
  );
};

export default BubbleText;
