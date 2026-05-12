"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Estou pensando em você agora mesmo. ❤️",
  "Você é a melhor parte do meu dia, Anna.",
  "Mal posso esperar pelo nosso próximo momento juntos.",
  "Obrigado por esse primeiro mês incrível!",
  "Lembre-se: você é apaixonante e muito especial para mim.",
  "Cada detalhe seu me faz ter certeza de que quero estar aqui."
];

export default function EmergencyLove() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const showLove = () => {
    // Sorteia uma mensagem diferente cada vez que clica
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMsg(randomMsg);
    setIsOpen(true);
  };

  return (
    <>
      {/* Botão Fixo */}
      <button 
        onClick={showLove}
        title="Abrir em caso de saudade"
        className="fixed bottom-8 right-8 z-[60] bg-[#8b5cf6] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 group"
      >
        <Heart 
          fill="white" 
          size={24} 
          className="group-hover:animate-pulse" 
        />
      </button>

      {/* Modal da Mensagem */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
            {/* Backdrop escurecido */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            {/* Cartão da Mensagem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-xs border-2 border-purple-100 relative z-10"
            >
              <div className="text-[#8b5cf6] mb-4 flex justify-center">
                <Heart fill="#8b5cf6" size={32} />
              </div>
              <p className="text-[#3b2a5c] font-playfair italic text-xl mb-6 leading-relaxed">
                "{msg}"
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#8b5cf6] transition-colors"
              >
                Fechar com carinho
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}