"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoveField() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação de entrada suave para o texto
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* IMAGEM DE FUNDO: Campo de Girassóis */}
      

      {/* Conteúdo Central */}
      <div ref={textRef} className="relative z-10 text-center px-6">
        <h2 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl italic font-light text-black drop-shadow-sm mb-6">
          Eu te amo.
        </h2>
        
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-yellow-500/50" />
          <span className="text-yellow-800 text-xs uppercase tracking-[0.5em] font-medium">
            Anna & Gabreil
          
          </span>
          <div className="h-[1px] w-12 bg-yellow-500/50" />
        </div>
      </div>
    </section>
  );
}