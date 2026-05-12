import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      {/* Rodapé ou Contato viria aqui */}
      <section className="h-[50vh] flex items-center justify-center border-t border-gray-100">
         <p className="text-gray-300">© 2026 Seu Nome • Editor de Vídeo</p>
      </section>
    </main>
  );
}