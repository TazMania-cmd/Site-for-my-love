"use client";
import { MapPin } from "lucide-react";

export default function OurPlace() {
  return (
    <section className="py-32 px-10 bg-[#f8f5ff] flex flex-col items-center justify-center">
      <div className="max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-purple-100 rounded-full">
            <MapPin className="text-[#8b5cf6] w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-playfair italic text-[#3b2a5c] mb-6">
          Onde o mundo parou.
        </h2>
        
        <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
          Não precisamos de grandes viagens ou mapas complicados. No dia 12 de abril, 
          entre as paredes da nossa casa, eu encontrei tudo o que estava procurando. 
          Foi aqui que o "eu" e "você" se tornou <strong>nós</strong>.
        </p>

        {/* Coordenadas - Deixa o visual muito moderno e sofisticado */}
        <div className="inline-block border-y border-purple-200 py-4 px-8">
          <span className="text-[#8b5cf6] font-mono tracking-[0.2em] text-sm">
            -16.729629, -49.313623 
          </span>
        </div>
        
        <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-400">
          Goiânia • Nossa Casa • 12.04.2026
        </p>
      </div>
    </section>
  );
}