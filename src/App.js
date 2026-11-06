import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import Hero from "./components/Hero";
import ParallaxSection from "./components/ParallaxSection";
import Proposal from "./components/Proposal";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Background colour transition using GSAP ScrollTrigger (green‑pastel → purple‑soft)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const body = document.body;
    gsap.to(body, {
      backgroundColor: "#E8E0F5", // purple‑soft
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      // initial colour is set via Tailwind (green‑pastel) in index.css
    });
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
