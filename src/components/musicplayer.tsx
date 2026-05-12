"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Music } from "lucide-react";

export default function MusicSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Animação suave para a letra da música aparecer ao scroll
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
    <section className="py-24 bg-[#2d0a0a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Player do Spotify */}
        <div className="order-2 md:order-1">
          <div className="bg-black/30 p-4 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
            <iframe 
              style={{ borderRadius: "15px" }}
              src="https://open.spotify.com/embed/track/SUA_ID_DA_MUSICA_AQUI?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Lado Direito: Letra da Música */}
        <div ref={textRef} className="order-1 md:order-2 space-y-6">
          <div className="flex items-center gap-3 text-red-400 mb-4">
            <Music size={20} />
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Nossa Trilha</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair italic mb-8 text-red-50">
            O que eu sinto em cada nota...
          </h2>

          <div className="space-y-4 font-light text-lg md:text-xl text-red-100/80 leading-relaxed italic">
            <p>"Cole aqui o trecho 01 da letra da música"</p>
            <p>"Cole aqui o trecho 02 da letra da música"</p>
            <p>"Cole aqui o trecho 03 da letra da música"</p>
          </div>

          <div className="pt-8 border-t border-red-900/50">
            <p className="text-xs text-red-400/60 uppercase tracking-widest">
              Goiânia • 12 de Maio de 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}