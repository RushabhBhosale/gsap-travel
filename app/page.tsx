import About from "@/components/about";
import Hero from "@/components/hero";
import { HorizontalScrollCarousel } from "@/components/horizontalScroll";

export default function Home() {
  return (
    <div>
      {/* Hero Section (Full Screen) */}
      <div className="overflow-hidden">
        <Hero />
      </div>
      {/* About Section with Top & Bottom Spacing */}
      <section className="pt-20">
        <About />
      </section>
      {/* Horizontal Scroll Section with Background & Padding */}
      <section className="pb-20">
        <HorizontalScrollCarousel />
      </section>
    </div>
  );
}
