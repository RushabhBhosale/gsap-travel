"use client";
import { useState } from "react";
import { Loader } from "@/components/loader";
import Hero from "@/components/hero";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {/* {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex justify-center min-h-screen">
          <Hero />
        </div>
      )} */}
      <div className="flex justify-center min-h-screen">
        <Hero />
      </div>
    </>
  );
}
