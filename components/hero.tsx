"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <h1 ref={textRef} className="text-5xl font-bold">
      Rushabh Bhosale
    </h1>
  );
};

export default Hero;
