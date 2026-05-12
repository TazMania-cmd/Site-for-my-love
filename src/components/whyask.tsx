"use client";
import { motion } from "framer-motion";

export default function WhyAsk() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Título com animação suave */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-playfair italic mb-12 text-purple-200"
        >
          Por que eu escolhi você?
        </motion.h2>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light text-lg md:text-xl italic">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            "Naquela tarde de 12 de abril, em minha casa, eu não estava apenas mudando o nosso status, 
            estava escolhendo a pessoa que eu quero admirar todos os dias."
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            "Escolhi você pela sua forma de agir, o seu caráter. — Desde a primeira vez que nos vimos, tive certeza que era você quem eu queria e te escolhi por todas as caracteristicas que compõe você. — e pelo sorriso que eu daria a vida para ver uma última vez."
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-purple-400 font-medium not-italic"
          >
            Hoje faz um mês. E eu escolheria você mais mil vezes.
          </motion.p>
        </div>
      </div>
    </section>

    
    
  );
}

<section className="relative py-24 bg-[#0a0a0a] text-white">
  {/* Conteúdo do porquê eu te pedi em namoro */}
  <div className="relative z-10">
    {/* Seus parágrafos emocionantes */}
  </div>
</section>