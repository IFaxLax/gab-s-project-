import React, { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import gsap from 'gsap';

export default function Proposal({ accepted, onAccept }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const proposalRef = useRef(null);

  // Entrance animation for the proposal container
  useEffect(() => {
    if (proposalRef.current) {
      gsap.fromTo(
        proposalRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, []);

  // Trigger confetti on acceptance and start timer
  useEffect(() => {
    if (accepted) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setShowContent(false);
        setStartTime(Date.now());
      }, 3000);
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
      <div className="flex space-x-2 text-xl font-mono text-gray-800">
        <span>{days}d</span>
        <span>{hours}h</span>
        <span>{minutes}m</span>
        <span>{seconds}s</span>
      </div>
    );
  };

  const formattedDate = startTime
    ? new Date(startTime).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <section
      ref={proposalRef}
      className="flex flex-col items-center justify-center min-h-screen bg-purple-soft p-6"
    >
      {showConfetti && <Confetti />}
      {showContent ? (
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-serif text-purple-deep mb-4">¿Quieres ser mi novia?</h2>
          <button
            className="px-6 py-3 bg-purple-deep text-white rounded-full hover:bg-purple-deep/90 transition transform hover:scale-105"
            onClick={onAccept}
          >
            Sí
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-lg text-gray-800">Fecha: {formattedDate}</p>
          <Timer />
        </div>
      )}
    </section>
  );
}
