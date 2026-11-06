import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Fade‑in title with blur
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "power2.out" }
    );
    // Fade‑in subtitle
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.5, duration: 1.5, ease: "power2.out" }
    );
    // Arrow bounce animation
    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-pastel bg-gradient-pastel">
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-serif text-gray-800"
      >
        Gabriela Ayala Dehesa
      </h1>
      <p
        ref={subtitleRef}
        className="mt-4 text-lg md:text-xl font-sans text-gray-700"
      >
        Desliza hacia abajo y revive los momentos más especiales
      </p>
      <a
        href="#section1"
        ref={arrowRef}
        className="mt-8 text-4xl text-gray-800 cursor-pointer"
        aria-label="Scroll down"
      >
        ↓
      </a>
    </section>
  );
}

