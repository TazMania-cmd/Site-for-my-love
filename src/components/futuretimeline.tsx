"use client";
import { motion } from "framer-motion";

const plans = [
  { 
    title: "Completar 1 Ano", 
    desc: "Comemorar da melhor maneira possível: juntos!", 
    color: "bg-yellow-100", 
    rotation: "-rotate-2" 
  },
  { 
    title: "28 de Julho", 
    desc: "Seu aniversário: O presente inesquecível!", 
    color: "bg-blue-100", 
    rotation: "rotate-3" 
  },
  { 
    title: "Próximos 5 Anos", 
    desc: "Construindo nossa base familiar e a entrada para nossa casa.", 
    color: "bg-pink-100", 
    rotation: "-rotate-1" 
  }
];

export default function FutureTimeline() {
  return (
    <section className="py-24 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Título Estilo Quadro */}
        <div className="relative mb-20 text-center">
          <div className="inline-block border-4 border-[#3b2a5c] p-8 bg-white shadow-[8px_8px_0px_#8b5cf6]">
            <h2 className="text-4xl md:text-5xl font-playfair italic text-[#3b2a5c]">
              Planos para o Futuro
            </h2>
          </div>
          
          {/* Post-its Decorativos ao redor do título */}
          <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="absolute -top-12 -left-4 md:-left-10 w-24 h-24 bg-yellow-200 shadow-md -rotate-12 p-2 hidden sm:block cursor-grab active:cursor-grabbing"
          >
            <p className="text-[10px] font-handwriting text-gray-700">Não esquecer: Girassóis! 🌻</p>
          </motion.div>
        </div>

        {/* Grade de Post-its de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`p-8 h-64 shadow-xl ${plan.color} ${plan.rotation} flex flex-col justify-between border-b-4 border-black/10`}
            >
              <div>
                <div className="h-4 w-12 bg-black/5 mx-auto mb-4 rounded-full" /> {/* "Fita adesiva" */}
                <h3 className="font-bold text-gray-800 text-xl mb-4 underline decoration-purple-300">
                  {plan.title}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {plan.desc}
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-tighter text-gray-400 text-right">
                #NossaJornada
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}