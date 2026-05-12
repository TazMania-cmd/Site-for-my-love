"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react"; // Troquei a seta por um coração

const projects = [
  { 
    title: "Nosso primeiro encontro.", 
    category: "O início", 
    year: "2026",
    message: "Aquele dia eu tive a certeza de que minha vida mudaria para sempre. Seu sorriso foi a primeira coisa que me salvou." 
  },
  { 
    title: "Nossa primeira viagem.", 
    category: "Ao meu aniversário", 
    year: "2025",
    message: "Cada quilômetro valeu a pena só para ver o pôr do sol ao seu lado. O melhor presente foi você estar lá."
  },
  { 
    title: "Nossa primeira noite.", 
    category: "Conexão Real", 
    year: "2026",
    message: "O tempo parou. Não eram apenas as horas passando, era a gente se tornando um só em silêncio."
  },
  { 
    title: "Início do nosso amor.", 
    category: "Para sempre", 
    year: "2024",
    message: "Tudo começou como um detalhe, e hoje você é o meu mundo inteiro. Te amo mais que ontem."
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-32 px-10 md:px-20 bg-(--background)">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] opacity-70">Linha do Tempo</span>
          <h2 className="text-5xl mt-2 font-medium">Nossos Momentos</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((proj, i) => (
          <div key={i} className="relative min-h-300px">
            <AnimatePresence mode="wait">
              {selectedId !== i ? (
                // --- VISÃO DA CAIXA (FOTO/CAPA) ---
                <motion.div
                  key="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  onClick={() => setSelectedId(i)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video bg-white shadow-sm border border-purple-100 relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Heart className="text-[#8b5cf6] fill-[#8b5cf6]" size={40} strokeWidth={1} />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-normal text-(--foreground)">{proj.title}</h3>
                      <p className="text-gray-400 mt-1 text-sm">{proj.category}</p>
                    </div>
                    <span className="font-mono text-sm text-gray-300">{proj.year}</span>
                  </div>
                </motion.div>
              ) : (
                // --- VISÃO DO TEXTO (MENSAGEM) ---
                <motion.div
                  key="text"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="aspect-video flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-inner border border-purple-100 cursor-pointer"
                >
                  <Heart className="text-[#8b5cf6] mb-4" size={24} />
                  <p className="text-xl italic text-(--foreground) leading-relaxed">
                    &quot;{proj.message}&quot;
                  </p>
                  <span className="mt-6 text-xs uppercase tracking-tighter text-gray-300">Clique para voltar</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}