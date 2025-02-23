"use client";
import { useState } from "react";
import { Loader } from "@/components/loader";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="flex justify-center items-center min-h-screen">
        <div>div</div>
      </div>
    </>
  );
}
