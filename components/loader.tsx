"use client";
import { useEffect } from "react";
import gsap from "gsap";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    const texts = [
      ".loader-text1",
      ".loader-text2",
      ".loader-text3",
      ".loader-text4",
      ".loader-text5",
      ".loader-text6",
    ];

    texts.forEach((cls) => {
      tl.fromTo(
        `${cls} .first`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15, ease: "power3.out" }
      );
      tl.fromTo(
        `${cls} .last`,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15, ease: "power3.out" },
        "<"
      );
      tl.to(
        `${cls} .first`,
        { y: -50, opacity: 0, duration: 0.15, ease: "power3.in" },
        "+=0.3"
      );
      tl.to(
        `${cls} .last`,
        { y: 50, opacity: 0, duration: 0.15, ease: "power3.in" },
        "<"
      );
    });

    tl.to(
      ".loader",
      { scaleY: 0, duration: 0.3, ease: "power3.inOut" },
      "+=0.3"
    );
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 text-white flex flex-col items-center justify-center loader w-full h-full">
      {[
        "Rushabh Bhosale",
        "रुषभ भोसले",
        "Рушаб Бхосале",
        "รุชาบ โบซาเล",
        "魯沙布 博薩萊",
        "ルシャブ ボサレ",
      ].map((text, i) => (
        <div
          key={i}
          className={`drop-shadow-md loader-text${i + 1} absolute flex gap-4`}
        >
          {text.split(" ").map((word, j) => (
            <span
              key={j}
              className={`text-5xl opacity-0 font-bold ${
                j === 0 ? "first" : "last"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
