"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.to("#title", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.2
    });
  }, []);

  return (
    <section className="h-screen flex items-center px-10 md:px-20 bg-white">
      <div className="overflow-hidden">
        <h1 id="title" className="text-[15vw] font-bold leading-[0.8] tracking-tighter translate-y-full">
          NARRATIVE <br /> DRIVEN.
        </h1>
      </div>
    </section>
  );
}