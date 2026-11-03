import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestro viaje de recuerdos
      </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desliza hacia abajo y revive los momentos más especiales
      </motion.p>
      <a href="#section1" className="hero-scroll-btn" aria-label="Scroll down">
        ↓
      </a>
    </section>
  );
}

export default Hero;

