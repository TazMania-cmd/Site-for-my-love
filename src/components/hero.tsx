"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.to("#title-line-1", { y: 0, duration: 1.5, ease: "power4.out", delay: 0.2 });
    gsap.to("#title-line-2", { y: 0, duration: 1.5, ease: "power4.out", delay: 0.4 });
  }, []);

  return (
    <section className="h-screen flex items-center px-10 md:px-20 bg-(--background)">
      <div className="flex flex-col">
        {/* Linha 1 */}
        <div className="overflow-hidden">
          <h1 id="title-line-1" className="text-[12vw] font-light leading-none tracking-tighter translate-y-full text-(--foreground) opacity-90">
            Nossa
          </h1>
        </div>
        
        {/* Linha 2 com a fonte sofisticada */}
        <div className="overflow-hidden -mt-4">
          <h1 
            id="title-line-2" 
            className="text-[13vw] font-playfair italic leading-none translate-y-full text-[#8b5cf6]"
          >
            história.
          </h1>
        </div>
      </div>
    </section>
  );
}