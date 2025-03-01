import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Card } from "./card";

const About = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center text-5xl font-medium">
        What do i like to do
      </div>
      <div className="md:flex md:space-x-6">
        <Card
          url="/assets/card/card-1.avif"
          title="Coding"
          desc="Building sleek apps with React Native, Ionic, and the MERN stack. TypeScript keeps things strict, but GSAP makes them smooth! Always learning, always shipping new projects."
        />

        <Card
          url="/assets/card/card-3.avif"
          title="Travel"
          desc="Exploring the world one trip at a time. Future plans? More adventures, more stories, and maybe some digital nomad life! Mountains, beaches, and vibrant cityscapes await."
        />

        <Card
          url="/assets/card/card-2.jpg"
          title="Cinema"
          desc="From mind-bending anime to cinematic masterpieces—every frame tells a story. Ghibli vibes, Tarantino twists, and a bucket list of must-watch films! Popcorn and deep discussions included."
        />
      </div>
    </div>
  );
};

export default About;
