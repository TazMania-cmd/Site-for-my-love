"use client";
import { MoveUpRight } from "lucide-react";

const projects = [
  { title: "Comercial de Moda", category: "Edição / Color", year: "2026" },
  { title: "Documentário Curto", category: "Storytelling", year: "2025" },
  { title: "YouTube Dark Channel", category: "Retenção / Motion", year: "2026" },
  { title: "Music Video", category: "Ritmo / Efeitos", year: "2024" },
];

export default function Projects() {
  return (
    <section className="py-32 px-10 md:px-20 bg-white">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-gray-400">Trabalhos Selecionados</span>
          <h2 className="text-5xl mt-2 font-medium">Portfolio</h2>
        </div>
        <p className="max-w-xs text-gray-500 text-sm hidden md:block">
          Focado em manter a audiência conectada através de cortes precisos e narrativa visual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((proj, i) => (
          <div key={i} className="group cursor-pointer">
            {/* Placeholder para o Vídeo/Capa */}
            <div className="aspect-video bg-gray-100 relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              {/* Ícone de seta que aparece no hover */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MoveUpRight size={32} strokeWidth={1} />
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-normal group-hover:underline underline-offset-8 decoration-1 transition-all">
                  {proj.title}
                </h3>
                <p className="text-gray-400 mt-1 text-sm">{proj.category}</p>
              </div>
              <span className="font-mono text-sm text-gray-300">{proj.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}