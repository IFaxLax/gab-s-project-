import React, { useEffect, useRef } from 'react';
import Card from './Card';
import './Timeline.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Example data structure - replace with your own image/video URLs and descriptions
const moments = [
  {
    type: 'image',
    src: 'INSERT_IMAGE_URL_1_HERE', // e.g., public/assets/photo1.jpg
    alt: 'Nuestro primer viaje',
    description: 'Recuerdo nuestro primer viaje juntos a la playa.'
  },
  {
    type: 'video',
    src: 'INSERT_VIDEO_URL_1_HERE', // e.g., public/assets/video1.mp4
    description: 'Un pequeño video de nuestra risa compartida.'
  },
  // Add more items as needed
];

function Timeline({ onEndReached }) {
  const lastItemRef = useRef(null);

  // Detect when the last card becomes visible to trigger the proposal screen
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      onEndReached();
    }
  }, [inView, onEndReached]);

  return (
    <section className="timeline" id="timeline">
      {moments.map((item, idx) => (
        <motion.div
          key={idx}
          className="timeline-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <Card {...item} />
        </motion.div>
      ))}
      {/* Invisible sentinel for IntersectionObserver */}
      <div ref={ref} className="timeline-end-sentinel" />
    </section>
  );
}

export default Timeline;

