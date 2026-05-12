import Hero from "@/components/hero";
import Counter from "@/components/counter"; // Novo
import StarryNight from "@/components/starrynights";
import Projects from "@/components/timeline";
import HeartDetails from "@/components/heartdetails";
import OurPlace from "@/components/ourplace";
import MusicSection from "@/components/musicplayer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Counter />
      <OurPlace/> 
      <Projects />
      <StarryNight />
      <MusicSection />
      <HeartDetails/>
     
      <footer className="py-20 flex flex-col items-center justify-center border-t border-purple-100">
         <p className="text-[#8b5cf6] font-medium tracking-widest uppercase text-[10px]">
           Nosso Primeiro Mês • 12/05/2026
         </p>
      </footer>
    </main>
  );
}