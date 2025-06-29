import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">SUPER QUADS</div>
          <ul className="menu">
            <li>Tour</li>
            <li>Galería de Aventuras</li>
            <li>Acerca de</li>
          </ul>
        </div>
        <div className="navbar-right">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-instagram"></i>
          <button className="reserve-btn">Reservar ➤</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
