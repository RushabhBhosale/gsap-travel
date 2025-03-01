import Hero from "@/components/hero";
import { HorizontalScrollCarousel } from "@/components/horizontalScroll";
import About from "@/components/about";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
      </div>
      <About />
      <HorizontalScrollCarousel />
    </div>
  );
}
