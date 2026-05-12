"use client";
import { useEffect, useRef } from "react";
import { Flower2 } from "lucide-react";
import gsap from "gsap";

export default function FloatingRosas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Criamos 15 rosas aleatórias
    const roses = container.querySelectorAll(".rose-element");

    roses.forEach((rose) => {
      // Posição inicial aleatória
      gsap.set(rose, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.2, // Opacidade variada para profundidade
        scale: Math.random() * 0.5 + 0.5,
      });

      // Animação de flutuação infinita
      gsap.to(rose, {
        x: "+=" + (Math.random() * 100 - 50), // Move um pouco para os lados
        y: "+=" + (Math.random() * 100 - 50), // Move um pouco para cima/baixo
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    >
      {[...Array(18)].map((_, i) => (
        <div key={i} className="rose-element absolute">
          {/* Cor roxa mediana/violeta para combinar com o tema */}
          <Flower2 size={32} className="text-[#8b5cf6] opacity-60 fill-[#8b5cf6]/20" strokeWidth={1} />
        </div>
      ))}
    </div>
  );
}