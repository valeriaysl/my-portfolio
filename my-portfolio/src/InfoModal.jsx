import React from 'react';
import './Hero.css';

export default function InfoModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✖</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
