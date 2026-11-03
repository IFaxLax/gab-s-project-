import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './Proposal.css';

function Proposal({ accepted, onAccept }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [startTime, setStartTime] = useState(null);

  // When accepted, trigger confetti then hide question after short delay
  useEffect(() => {
    if (accepted) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setShowContent(false);
        setStartTime(Date.now());
      }, 3000); // 3 seconds celebration
      return () => clearTimeout(timer);
    }
  }, [accepted]);

  // Timer component
  const Timer = () => {
    const [elapsed, setElapsed] = useState(0);
    useEffect(() => {
      if (!startTime) return;
      const interval = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(interval);
    }, [startTime]);

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    return (
      <div className="timer">
        <span>{days}d </span>
        <span>{hours}h </span>
        <span>{minutes}m </span>
        <span>{seconds}s</span>
      </div>
    );
  };

  // Formatted date for the day of acceptance
  const formattedDate = startTime
    ? new Date(startTime).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <section className="proposal">
      {showConfetti && <Confetti />}
      {showContent ? (
        <div className="proposal-card">
          <h2 className="proposal-question">¿Quieres ser mi novia?</h2>
          <button className="yes-button" onClick={onAccept}>Sí</button>
        </div>
      ) : (
        <div className="proposal-result">
          <p className="accept-date">Fecha: {formattedDate}</p>
          <Timer />
        </div>
      )}
    </section>
  );
}

export default Proposal;

