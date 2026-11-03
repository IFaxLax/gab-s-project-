import React from "react";
import { motion } from "framer-motion";
import "./ParallaxSection.css";

/**
 * Props:
 *   bgType: "video" | "image"
 *   src:   ruta al archivo (relativa a public/)
 *   text:  texto que se muestra centrado
 *   overlayOpacity: número entre 0‑1 (oscurecimiento del fondo)
 *   id:   opcional, id del elemento
 */
export default function ParallaxSection({ bgType, src, text, overlayOpacity = 0.4, id }) {
  return (
    <section className="parallax-section" id={id}>
      {bgType === "video" ? (
        <video
          className="parallax-bg video-bg"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="parallax-bg image-bg"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}

      {/* capa semitransparente */}
      <div
        className="parallax-overlay"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Texto centrado con animación */}
      <motion.div
        className="parallax-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>{text}</h2>
      </motion.div>
    </section>
  );
}

