import Hero from "@/components/hero";
import Timeline from "@/components/timeline"; // Renomeie o antigo Projects

export default function Home() {
  return (
    <main>
      <Hero /> 
      <section className="py-20 flex flex-col items-center justify-center">
         <p className="text-xl italic opacity-50">Para a pessoa que mudou meu 2026...</p>
      </section>
      <Timeline />
      <footer className="h-screen flex items-center justify-center bg-[#4a0e0e] text-[#fff5f5]">
         <h2 className="text-4xl font-serif">Eu te amo.</h2>
      </footer>
    </main>
  );
}