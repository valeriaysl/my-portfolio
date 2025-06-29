import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="tire-carousel-wrapper">
        <div className="tire-wrapper">
          <img src="/images/llanta.png" alt="Tire" className="tire-spin" />
        </div>
      </div>
    </div>
  );
}

export default App;
