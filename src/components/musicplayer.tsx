"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Music } from "lucide-react";

export default function MusicSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current.querySelectorAll("p"), {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    // Alterado para um Roxo Profundo que conecta com o resto do site
    <section className="relative py-24 bg-[#120d1d] text-white overflow-hidden">
      
      {/* Gradiente refinado vindo do preto absoluto */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1">
          {/* Sombra e borda ajustadas para o novo tom */}
          <div className="bg-black/40 p-4 rounded-3xl backdrop-blur-md border border-purple-500/10 shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]">
           <iframe 
             style={{borderRadius: "12px"}} 
             src="https://open.spotify.com/embed/track/6G2Zfe5YH4JtTxyB1ulXTd?utm_source=generator&theme=0" 
             width="100%" 
             height="352" 
             frameBorder="0" 
             allowFullScreen={true} 
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
             loading="lazy"
           ></iframe>
          </div>
        </div>

        <div ref={textRef} className="order-1 md:order-2 space-y-6">
          <div className="flex items-center gap-3 text-purple-400 mb-4">
            <Music size={20} />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Nossa Trilha Sonora</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair italic mb-8 text-purple-50">
            Meu remédio contra o medo.
          </h2>

          <div className="space-y-4 font-light text-lg md:text-xl text-purple-100/70 leading-relaxed italic">
            <p>"Teu olhar, tudo que eu preciso, a luz que me aquece."</p>
            <p>"Sua boca, seu olhar, seu sorriso, seu cheiro doce."</p>
            <p>"Mas meu sonho se realizaria se você me desse uma chance."</p>
          </div>

          {/* Divisória em tom de violeta suave */}
          <div className="pt-8 border-t border-purple-900/30">
            <p className="text-xs text-purple-400/50 font-mono italic">
              — Um mês de nós, 12.05.2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}