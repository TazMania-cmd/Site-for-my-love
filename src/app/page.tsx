import Hero from "@/components/hero";
import Counter from "@/components/counter"; // Novo
import Projects from "@/components/timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter /> 
      <Projects />
      
      {/* Rodapé Final */}
      <footer className="py-20 flex flex-col items-center justify-center border-t border-purple-100">
         <p className="text-[#8b5cf6] font-medium tracking-widest uppercase text-[10px]">
           Nosso Primeiro Mês • 12/05/2026
         </p>
      </footer>
    </main>
  );
}