"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { WordRotate } from "./magicui/word-rotate";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./socials";
import { RiSendPlane2Line } from "react-icons/ri";

const Hero = () => {
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const generatePositions = () => {
    return Array.from({ length: 7 }, () => ({
      width: `${Math.floor(Math.random() * 20) + 15}%`,
      height: `${Math.floor(Math.random() * 50) + 10}vh`,
      x: `${Math.floor(Math.random() * 300) - 200}%`,
      y: `${Math.floor(Math.random() * 200) - 100}%`,
    }));
  };

  useEffect(() => {
    if (loaded) {
      gsap.to(overlayRef.current, {
        duration: 0.9,
        onComplete: () => {
          overlayRef.current!.style.display = "none";
        },
      });

      gsap.fromTo(
        textRef.current,
        { opacity: 0, translateY: 100 },
        {
          opacity: 1,
          translateY: 0,
          duration: 0.6,
          ease: "back.inOut",
          delay: 0.2,
        }
      );

      const positions = generatePositions();

      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.set(img, {
          width: positions[index].width,
          height: positions[index].height,
          translateX: positions[index].x,
          translateY: positions[index].y,
          position: "absolute",
          onComplete: () => {
            setShowImage(true);
          },
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
    <div className="h-screen w-[100%] lg:w-[90%]  mx-auto relative flex justify-center flex-col overflow-hidden">
      <div
        ref={overlayRef}
        className="fixed inset-0 flex justify-center items-center"
      ></div>
      <div className="flex px-4 w-full justify-center my-20 mx-auto">
        <div className="md:w-[60%]">
          <div className="w-full flex justify-center">
            <div ref={textRef} className="opacity-0 md:block hidden">
              <h1 className="md:text-[80px] text-4xl md:leading-[100px] font-medium text-black/30 my-7">
                Hello!! <br />
                My name is <br />
                <span className="text-black">Rushabh Bhosale</span> <br />
                <div className="flex gap-2 items-center min-w-[750px] max-w-[750px]">
                  I'm a
                  <span className="text-black">
                    <WordRotate
                      duration={3000}
                      words={["Software Developer", "Traveller", "Cinephile"]}
                    />
                  </span>
                </div>
              </h1>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center text-center">
              <div className="text-sm tracking-[4px] uppercase text-primary font-semibold mb-4">
                Front End Developer
              </div>
              <h1 className="text-4xl font-medium mb-4">
                Hi, I'm Rushabh Bhosale let's connect!
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                Experienced frontend developer proficient with Next.js, React,
                Redux, and popular CSS frameworks like Bootstrap, and Tailwind
                CSS.
              </p>
              <div className="flex flex-col gap-y-3 mt-4 gap-x-3 md:flex-row mx-auto xl:mx-0 mb-12">
                <Link href="/">
                  <Button className="gap-x-2">
                    Contact Me <RiSendPlane2Line size={18} />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="secondary" className="gap-x-2">
                    Projects
                  </Button>
                </Link>
              </div>

              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] hidden lg:flex justify-center items-center space-x-4">
          {[
            { src: "hero-6.avif", height: "250px" },
            { src: "hero-2.avif", height: "400px" },
            { src: "hero-5.avif", height: "320px" },
            { src: "hero-1.avif", height: "360px" },
            { src: "hero-4.avif", height: "200px" },
            { src: "hero-7.avif", height: "100px" },
            { src: "hero-3.avif", height: "100px" },
          ].map((img, i) => (
            <div
              key={i}
              style={{ opacity: showImage ? 100 : 0 }}
              className={`w-16 h-[${img.height}] rounded-full flex items-center`}
            >
              <img
                ref={(el: any) => {
                  imageRefs.current[i] = el!;
                  if (i === 6) setLoaded(true);
                }}
                className={`w-full h-full object-cover`}
                src={`/assets/hero/${img.src}`}
                onLoad={() => i === 6 && setLoaded(true)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
