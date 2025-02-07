'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
        '-=0.4'
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center p-8"
    >
      <h1 ref={textRef} className="text-5xl md:text-6xl font-bold">
        true blog world
      </h1>
      <p ref={subtextRef} className="mt-4 text-lg md:text-xl max-w-2xl">
        Discover premium quality and innovation with our exclusive products.
      </p>
      <button
        ref={buttonRef}
        className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-300 transition"
      >
        Explore Now
      </button>
    </section>
  );
}

