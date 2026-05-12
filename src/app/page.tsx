import Hero from "@/components/hero";
import Counter from "@/components/counter"; // Novo
import StarryNight from "@/components/starrynights";
import { motion, useScroll, useTransform } from "framer-motion";
import HeartDetails from "@/components/heartdetails";
import OurPlace from "@/components/ourplace";
import MusicSection from "@/components/musicplayer";
import FutureTimeline from "@/components/futuretimeline";
import WhyAsk from "@/components/whyask";
import LoveField from "@/components/lovesection";


export default function Home() {
  
  return (
    <main>
      <Hero />
      <Counter />
      <OurPlace/> 
      <StarryNight />
      <WhyAsk />
      <MusicSection />
      <HeartDetails/>
      <FutureTimeline />
      <LoveField />

      <footer className="py-20 flex flex-col items-center justify-center border-t border-purple-100">
         <p className="text-[#8b5cf6] font-medium tracking-widest uppercase text-[10px]">
          Este site é o meu primeiro grande projeto como desenvolvedor web, dedicado à minha maior inspiração
         </p>
      </footer>
    </main>
  );
}

