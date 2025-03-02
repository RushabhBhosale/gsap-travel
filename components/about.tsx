"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import { ShimmerButton } from "./magicui/shimmer-button";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        background:
          "linear-gradient(360deg, #f0f4f8 0%, #ecd0d0 20%, #ecc6c6 80%, #f0f4f8 100%)",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .to(containerRef.current, {
          background:
            "linear-gradient(360deg, #f0f4f8 0%, #ecd0d0 20%, #ecc6c6 80%, #f0f4f8 100%)",
          duration: 2,
          immediateRender: true,
        })
        .to(containerRef.current, {
          background:
            "linear-gradient(360deg, #f0f4f8 0%, #f5e8ff 20%, #eee0ff 80%, #f0f4f8 100%)",
          duration: 2,
        })
        .to(containerRef.current, {
          background:
            "linear-gradient(360deg, #f0f4f8 0%, #e6ffe6 20%, #dfffe0 80%, #f0f4f8 100%)",
          duration: 2,
        });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: imageRef.current,
      });

      gsap.set(image1Ref.current, { opacity: 1, translateY: "0%" });

      [
        { card: card2Ref, image: image2Ref },
        { card: card3Ref, image: image3Ref },
      ].forEach(({ card, image }) => {
        gsap.fromTo(
          image.current,
          { opacity: 0, translateY: "100%" },
          {
            opacity: 1,
            translateY: "0%",
            scrollTrigger: {
              trigger: card.current,
              start: "center 70%",
              end: "center 50%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-start relative transition-all duration-500"
    >
      <div className="flex flex-col w-[50%] space-y-32">
        <div
          ref={card1Ref}
          className="h-screen flex items-center"
          id="screen-1"
        >
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-6xl font-bold text-black">Coding</h1>
            <div className="text-2xl text-black">
              Exploring the world of web and mobile development, crafting
              amazing digital experiences.
            </div>
            <div className="w-48">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-widest text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  View Projects
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
        <div
          ref={card2Ref}
          className="h-screen flex items-center"
          id="screen-2"
        >
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-6xl font-bold text-black">Movies</h1>
            <div className="text-2xl text-black">
              A cinematic journey through my favorite films, directors, and
              genres.
            </div>
            <div className="w-48">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-widest text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  See Favourites
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
        <div
          ref={card3Ref}
          className="h-screen flex items-center"
          id="screen-3"
        >
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-6xl font-bold text-black">Travel</h1>
            <div className="text-2xl text-black">
              Discovering new places, cultures, and experiences one journey at a
              time.
            </div>
            <div className="w-56">
              <div className="w-fit">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-widest text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Explore My Journey
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="w-[30%] h-72 sticky top-1/4 overflow-hidden flex justify-center"
      >
        <Image
          ref={image1Ref}
          src="/assets/card/card-1.avif"
          alt="card-image"
          fill
          className="object-cover w-full h-full rounded-2xl"
        />
        <Image
          ref={image2Ref}
          src="/assets/card/card-2.avif"
          alt="card-image"
          fill
          className="object-cover w-full h-full rounded-2xl"
        />
        <Image
          ref={image3Ref}
          src="/assets/card/card-3.avif"
          alt="card-image"
          fill
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default About;
