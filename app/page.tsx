"use client";
import { useState } from "react";
import Hero from "@/components/hero";
import { HorizontalScrollCarousel } from "@/components/horizontalScroll";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div>
        <div className="overflow-hidden">
          <Hero />
        </div>
        <HorizontalScrollCarousel />
      </div>
    </>
  );
}
