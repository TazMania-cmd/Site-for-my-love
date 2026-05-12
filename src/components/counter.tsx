"use client";
import { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";
import gsap from "gsap";

export default function Counter() {
  const [time, setTime] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Data do início do namoro: 12 de abril de 2026
    const startDate = new Date("2026-04-12T00:00:00"); 

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      
      let months = (now.getMonth() + 12 * now.getFullYear()) - (startDate.getMonth() + 12 * startDate.getFullYear());
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days = lastMonth + days;
      }

      setTime({ months, days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCounter, 1000);
    updateCounter();

    // Animação sutil das estrelas de fundo
    const stars = containerRef.current?.querySelectorAll(".star-mini");
    if (stars) {
      gsap.to(stars, {
        opacity: () => Math.random() * 0.4 + 0.1,
        duration: () => Math.random() * 2 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 2 }
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#030108] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Estrelas sutis para integração visual */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="star-mini absolute bg-white rounded-full opacity-10 pointer-events-none"
          style={{
            width: "1px",
            height: "1px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        {/* Cabeçalho com o Coração e Linhas Gradient */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <Heart size={16} className="text-[#a78bfa] fill-[#a78bfa]/20" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>

        <h2 className="text-[10px] uppercase tracking-[0.3em] text-purple-400/60 mb-12">
          Tempo ao seu lado
        </h2>

        {/* Números em Marfim com brilho suave */}
        <div className="flex gap-6 md:gap-12 mb-12">
          <TimeUnit value={time.months} label="Mês" />
          <TimeUnit value={time.days} label="Dias" />
          <TimeUnit value={time.hours} label="Horas" />
          <TimeUnit value={time.minutes} label="Min" />
          <TimeUnit value={time.seconds} label="Seg" />
        </div>
        
        {/* Frase em Itálico Estilo Playfair */}
        <p className="text-purple-100/40 font-serif italic text-sm md:text-base px-6">
          &quot;E cada segundo parece pouco perto de uma vida inteira.&quot;
        </p>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-light text-[#fefae0] drop-shadow-[0_0_15px_rgba(254,250,224,0.3)] tabular-nums">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[9px] uppercase tracking-widest text-purple-400/40 mt-2">
        {label}
      </span>
    </div>
  );
}