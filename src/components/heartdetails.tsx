"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const details = [
  "O jeito que você sorri quando está distraída.",
  "Sua risada é como uma bela canção para os meus ouvidos.",
  "A forma que você caminha.",
  "A paz indescritível que eu sinto quando estamos juntos.",
  "A sua empolgaçãop em me mostrar algo.",
  "O seus olhos."
];

export default function HeartDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".detail-item");
    
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-10 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6] mb-16 text-center opacity-70 font-semibold">
          Pequenos Detalhes
        </h2>
        
        <div className="space-y-16">
          {details.map((text, i) => (
            <div key={i} className="detail-item flex items-start gap-8 group">
              <span className="font-playfair italic text-4xl text-[#8b5cf6] opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                0{i + 1}
              </span>
              <div className="flex flex-col w-full">
                <p className="text-2xl md:text-3xl text-[var(--foreground)] font-light leading-relaxed pb-6">
                  {text}
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-purple-100 via-purple-200 to-transparent group-hover:via-[#8b5cf6]/30 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}