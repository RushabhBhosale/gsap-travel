"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef: any = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      gsap.to(overlayRef.current, {
        background: "transparent",
        duration: 1,
        onComplete: () => {
          overlayRef.current!.style.display = "none";
        },
      });

      gsap.fromTo(
        textRef.current?.children,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
        }
      );

      const positions = [
        { width: "16.66%", height: "100vh", x: "-327.6%", y: "-29.5%" },
        { width: "16.66%", height: "100vh", x: "-258.5%", y: "-29.5%" },
        { width: "16.66%", height: "100vh", x: "-189.5%", y: "-29.5%" },
        { width: "16.66%", height: "100vh", x: "-121%", y: "-29.5%" },
        { width: "16.66%", height: "100vh", x: "-52.5%", y: "-29.5%" },
        { width: "16.66%", height: "100vh", x: "16%", y: "-29.5%" },
      ];

      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.set(img, {
          width: positions[index].width,
          height: positions[index].height,
          translateX: positions[index].x,
          translateY: positions[index].y,
          position: "absolute",
        });

        gsap.to(img, {
          delay: 1,
          width: "64px",
          height: "300px",
          borderRadius: "90px",
          translateX: "0",
          translateY: "0",
          duration: 1,
          ease: "power3.inOut",
        });
      });
    }
  }, [loaded]);

  return (
    <div className="h-screen container relative flex justify-center flex-col">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex justify-center items-center"
      >
        <div
          ref={textRef}
          className="flex space-x-1 text-[100px] font-bold text-white text-shadow"
        >
          {"Rushabh Bhosale".split("").map((char, index) => (
            <span key={index} style={{ opacity: 0.3 }}>
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto">
        <div>
          <div className="w-full flex justify-center">
            <div>
              <h1 className="text-[80px] leading-[82px] font-bold my-7">
                Miles to go, <span className="text-primary">stories</span> to
                tell.
              </h1>
              <div className="comic-neue-regular font-medium text-xl">
                This is my little space on the internet—where I share the things
                that keep me going. Coding, traveling, and getting lost in great
                stories.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center space-x-4 overflow-hidden">
          {[
            "hero-6.avif",
            "hero-2.avif",
            "hero-5.avif",
            "hero-1.avif",
            "hero-4.avif",
            "hero-3.avif",
          ].map((src, i) => (
            <div
              key={i}
              className="w-16 h-[300px] rounded-full overflow-hidden"
            >
              <img
                ref={(el: any) => {
                  imageRefs.current[i] = el!;
                  if (i === 5) setLoaded(true);
                }}
                className="w-full h-full object-cover"
                src={`/assets/${src}`}
                alt={`hero-${i + 1}`}
                onLoad={() => i === 5 && setLoaded(true)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
