import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Proposal from './components/Proposal';
import './App.css';

function App() {

  // Scroll background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);
      // Interpolate between pastel green and subtle purple
      const start = [184, 225, 192]; // #b8e1c0
      const end = [211, 197, 227]; // #d3c5e3
      const r = Math.round(start[0] + (end[0] - start[0]) * progress);
      const g = Math.round(start[1] + (end[1] - start[1]) * progress);
      const b = Math.round(start[2] + (end[2] - start[2]) * progress);
      document.body.style.background = `rgb(${r},${g},${b})`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Show proposal once scrolling reaches end
  const handleEndReached = () => setShowProposal(true);

  return (
    <div className="app">
      <Hero />
      <Timeline onEndReached={handleEndReached} />
      {showProposal && (
        <Proposal
          accepted={accepted}
          onAccept={() => setAccepted(true)}
        />
      )}
    </div>
  );
}

export default App;
