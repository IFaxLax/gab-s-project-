import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import Hero from "./components/Hero";
import ParallaxSection from "./components/ParallaxSection";
import Proposal from "./components/Proposal";
import "./App.css";

export default function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Background colour transition (green pastel → soft purple)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);
      const start = [232, 245, 233]; // #e8f5e9
      const end = [243, 229, 245];   // #f3e5f5
      const r = Math.round(start[0] + (end[0] - start[0]) * progress);
      const g = Math.round(start[1] + (end[1] - start[1]) * progress);
      const b = Math.round(start[2] + (end[2] - start[2]) * progress);
      document.body.style.background = `rgb(${r},${g},${b})`;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEndReached = () => setShowProposal(true);

  return (
    <div className="app">
      <Hero />

      {/* Sección 1 – video de fondo */}
      <ParallaxSection
        bgType="video"
        src="/assets/videoBackground.mp4" // <-- reemplaza con tu video en public/assets
        text="Si cada momento a tu lado es especial..."
        overlayOpacity={0.4}
        id="section1"
      />

      {/* Sección 2 – foto 1 */}
      <ParallaxSection
        bgType="image"
        src="/assets/photo1.jpg" // <-- reemplaza con tu foto1 en public/assets
        text="...cada recuerdo que creamos es inolvidable."
        overlayOpacity={0.4}
        id="section2"
      />

      {/* Sección 3 – foto 2 */}
      <ParallaxSection
        bgType="image"
        src="/assets/photo2.jpg" // <-- reemplaza con tu foto2 en public/assets
        text="Y ya no quiero crear recuerdos con nadie más."
        overlayOpacity={0.4}
        id="section3"
      />

      {/* Detector de final de la última sección */}
      <InView as="div" onChange={(inView) => inView && handleEndReached()} threshold={0.5} />

      {showProposal && (
        <Proposal accepted={accepted} onAccept={() => setAccepted(true)} />
      )}
    </div>
  );
}
