"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { motion } from "motion/react";

const Hero = () => {
  const textRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef: any = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current, { y: 50, opacity: 0, duration: 0.8 })
      .from(descRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(
        btnsRef.current.children,
        { scale: 0.8, opacity: 0, stagger: 0.2, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <div className="h-screen container relative flex justify-center flex-col">
      <div className="w-full flex justify-center">
        <div className="md:w-1/2 w-3/4 text-center">
          <h1 ref={textRef} className="text-5xl font-bold my-7">
            Miles to go, <span className="text-primary">stories</span> to tell.
          </h1>
          <div ref={descRef} className="comic-neue-regular font-medium text-xl">
            This is my little space on the internet—where I share the things
            that keep me going. Coding, traveling, and getting lost in great
            stories.{" "}
            <span className="hidden md:block">
              Whether it's building something cool, exploring new places, or
              binge-watching my favorite shows, it all comes together here. Just
              me, my work, my adventures
            </span>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-20 flex justify-center">
        <div ref={btnsRef} className="w-[90%] flex justify-between">
          <Button variant="roundedOutline" size="rounded">
            Explore Work
          </Button>
          <Button variant="roundedOutline" size="rounded">
            Get in contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
