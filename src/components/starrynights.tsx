"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StarryNight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = containerRef.current?.querySelectorAll(".star");
    
    if (stars) {
      stars.forEach((star) => {
        gsap.to(star, {
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }

    // Brilho pulsante da lua amarelada
    gsap.to(moonRef.current, {
      boxShadow: "0 0 100px 30px rgba(255, 253, 208, 0.15)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen bg-[#030108] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Estrelas distantes */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star absolute bg-white rounded-full"
          style={{
            width: "1px",
            height: "1px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: 0.15,
          }}
        />
      ))}

      {/* A LUA CHEIA REALISTA */}
      <div className="relative mb-12">
        {/* Glow externo amarelado */}
        <div className="absolute inset-0 bg-[#fffde4]/5 blur-[100px] rounded-full scale-150" />
        
        {/* Corpo da Lua com cor marfim e crateras procedurais */}
        <div 
        ref={moonRef}
        className="w-48 h-48 md:w-64 md:h-64 bg-[#fefae0] rounded-full relative z-10 overflow-hidden shadow-[inset_-20px_-15px_40px_rgba(0,0,0,0.2)]"
        >
        {/* Crateras com opacidade maior e blur menor */}
        <div className="absolute top-[15%] left-[25%] w-10 h-8 bg-gray-400/20 rounded-full blur-[4px] rotate-45" />
        <div className="absolute top-[45%] left-[10%] w-14 h-12 bg-gray-400/15 rounded-full blur-[6px]" />
        <div className="absolute bottom-[20%] right-[15%] w-20 h-16 bg-gray-400/20 rounded-full blur-[8px]" />
        <div className="absolute top-[35%] right-[20%] w-8 h-8 bg-gray-400/25 rounded-full blur-[3px]" />
        <div className="absolute bottom-[40%] left-[40%] w-6 h-6 bg-gray-400/30 rounded-full blur-[2px]" />
        
        {/* Detalhes de "mares" lunares (manchas maiores e mais suaves) */}
        <div className="absolute top-[10%] right-[30%] w-24 h-20 bg-gray-500/10 rounded-full blur-xl" />

        {/* Textura de porosidade para não ficar liso demais */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
        </div>
      </div>

      <div className="z-10 text-center px-6">
        <h2 className="text-white font-sophisticated text-5xl md:text-6xl mb-4">
          A Lua de 12 de Abril
        </h2>
        <p className="text-[#fefae0]/40 max-w-sm mx-auto font-light italic text-lg leading-relaxed">
          Sua luz testemunhou o início da nossa jornada.
        </p>
      </div>
    </section>
  );
}