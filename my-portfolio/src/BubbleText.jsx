import React, { useEffect } from 'react';
import './BubbleText.css';

const BubbleText = ({ text }) => {
  useEffect(() => {
    const spans = document.querySelectorAll('.hoverText span');

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function () {
        this.style.fontWeight = '700';
        this.style.color = '#e0e7ff';

        const left = this.previousElementSibling;
        const right = this.nextElementSibling;

        if (left && left.tagName === 'SPAN') {
          left.style.fontWeight = '600';
          left.style.color = '#cbd5e1';
        }
        if (right && right.tagName === 'SPAN') {
          right.style.fontWeight = '600';
          right.style.color = '#cbd5e1';
        }
      });

      span.addEventListener('mouseleave', function () {
        this.style.fontWeight = '';
        this.style.color = '';

        const left = this.previousElementSibling;
        const right = this.nextElementSibling;

        if (left && left.tagName === 'SPAN') {
          left.style.fontWeight = '';
          left.style.color = '';
        }
        if (right && right.tagName === 'SPAN') {
          right.style.fontWeight = '';
          right.style.color = '';
        }
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
