"use client";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import gsap from "gsap";

export default function OurPlace() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = containerRef.current?.querySelectorAll(".star-mini");
    const constellationPoints = containerRef.current?.querySelectorAll(".constellation-node");

    if (stars) {
      stars.forEach((star) => {
        gsap.to(star, {
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }

    // Animação para os "nós" da constelação brilharem de forma rítmica
    if (constellationPoints) {
      gsap.to(constellationPoints, {
        scale: 1.5,
        opacity: 0.8,
        duration: 2,
        stagger: { each: 0.4, repeat: -1, yoyo: true },
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef}
className="py-32 px-10 bg-[#030108] flex flex-col items-center justify-center relative overflow-hidden outline outline-1 outline-[#030108]"    >
      {/* Camada de estrelas de fundo */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="star-mini absolute bg-white rounded-full"
          style={{
            width: "1px",
            height: "1px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: 0.2,
          }}
        />
      ))}

      {/* Constelação Esquerda: Representação de um Caminho */}
      <svg className="absolute top-20 left-10 w-64 h-64 opacity-40 pointer-events-none hidden md:block">
        <path d="M 20,150 L 80,100 L 140,120 L 200,40" fill="none" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="5,5" />
        <circle cx="20" cy="150" r="2" fill="#a78bfa" className="constellation-node shadow-[0_0_10px_#a78bfa]" />
        <circle cx="80" cy="100" r="2.5" fill="#a78bfa" className="constellation-node shadow-[0_0_10px_#a78bfa]" />
        <circle cx="140" cy="120" r="2" fill="#a78bfa" className="constellation-node shadow-[0_0_10px_#a78bfa]" />
        <circle cx="200" cy="40" r="3" fill="#a78bfa" className="constellation-node shadow-[0_0_15px_#a78bfa]" />
      </svg>

      {/* Constelação Direita: O Triângulo de Goiânia */}
      <svg className="absolute bottom-20 right-10 w-64 h-64 opacity-40 pointer-events-none hidden md:block">
        <path d="M 50,50 L 150,80 L 100,180 Z" fill="none" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="3,3" />
        <circle cx="50" cy="50" r="2" fill="#a78bfa" className="constellation-node" />
        <circle cx="150" cy="80" r="2.5" fill="#a78bfa" className="constellation-node" />
        <circle cx="100" cy="180" r="2" fill="#a78bfa" className="constellation-node" />
      </svg>

      <div className="max-w-xl text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-purple-500/10 rounded-full border border-purple-500/20 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <MapPin className="text-[#a78bfa] w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-playfair italic text-[#fefae0] mb-6">
          Onde o mundo parou.
        </h2>
        
        <p className="text-lg text-purple-100/60 font-light leading-relaxed mb-8 italic">
          "Foi entre as paredes da nossa casa, no dia 12 de abril, que eu encontrei o meu lugar no mundo."
        </p>

        <div className="inline-block border-y border-purple-500/20 py-4 px-8 backdrop-blur-sm">
          <span className="text-[#a78bfa] font-mono tracking-[0.2em] text-sm drop-shadow-[0_0_12px_rgba(167,139,250,0.8)]">
            -16.729629, -49.313623 
          </span>
        </div>
        
        <p className="mt-4 text-[10px] uppercase tracking-widest text-purple-400/40 font-bold">
          Goiânia • Nossa Casa • 12.04.2026
        </p>
      </div>
    </section>
  );
}