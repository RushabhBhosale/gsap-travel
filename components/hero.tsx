"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      gsap.to(overlayRef.current, {
        duration: 0.9,
        onComplete: () => {
          overlayRef.current!.style.display = "none";
        },
      });

      const positions = [
        { width: "16.66%", height: "30vh", x: "-293.6%", y: "-59.5%" },
        { width: "22.66%", height: "45vh", x: "-261.5%", y: "40.5%" },
        { width: "30.66%", height: "40vh", x: "-125.5%", y: "50.5%" },
        { width: "16.66%", height: "45vh", x: "-57%", y: "44.5%" },
        { width: "32.66%", height: "40vh", x: "-145%", y: "-64.5%" },
        { width: "32.66%", height: "38vh", x: "-51%", y: "-61.5%" },
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
          delay: 0.3,
          width: "64px",
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
    <div className="md:h-screen w-screen relative flex justify-center flex-col bg-white">
      <div
        ref={overlayRef}
        className="fixed inset-0 flex justify-center items-center bg-white"
      ></div>
      <div className="flex px-4 max-w-7xl my-20 mx-auto">
        <div>
          <div className="w-full flex justify-center">
            <div>
              <h1 className="md:text-[80px] text-6xl md:leading-[82px] font-bold my-7">
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
        <div className="w-full hidden md:flex justify-center space-x-4">
          {[
            { src: "hero-6.avif", height: "250px" },
            { src: "hero-2.avif", height: "400px" },
            { src: "hero-5.avif", height: "320px" },
            { src: "hero-1.avif", height: "360px" },
            { src: "hero-4.avif", height: "200px" },
            { src: "hero-3.avif", height: "100px" },
          ].map((img, i) => (
            <div
              key={i}
              className={`w-16 h-[${img.height}] rounded-full flex items-center`}
            >
              <img
                ref={(el: any) => {
                  imageRefs.current[i] = el!;
                  if (i === 5) setLoaded(true);
                }}
                className={`w-full h-full object-cover`}
                src={`/assets/${img.src}`}
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
