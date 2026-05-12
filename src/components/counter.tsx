"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function Counter() {
  const [time, setTime] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2026-04-12T00:00:00"); // Data do início

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      // Cálculos
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      
      // Cálculo aproximado de meses e dias restantes
      const months = (now.getMonth() + 12 * now.getFullYear()) - (startDate.getMonth() + 12 * startDate.getFullYear());
      
      // Ajuste para dias (considerando o dia do mês)
      let days = now.getDate() - startDate.getDate();
      if (days < 0) {
        // Se ainda não chegou no dia 12 deste mês, subtrai um mês e calcula os dias
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days = lastMonth + days;
      }

      setTime({ months, days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCounter, 1000);
    updateCounter();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 flex flex-col items-center justify-center bg-(--background)">
      <div className="flex items-center gap-2 mb-8 opacity-40">
        <div className="h-px w-12 bg-[#8b5cf6]"></div>
        <Heart size={16} className="text-[#8b5cf6] fill-[#8b5cf6]" />
        <div className="h-px w-12 bg-[#8b5cf6]"></div>
      </div>

      <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-12">
        Tempo ao seu lado
      </h2>

      <div className="flex gap-8 md:gap-16 text-(--foreground)">
        <TimeUnit value={time.months} label="Mês" />
        <TimeUnit value={time.days} label="Dias" />
        <TimeUnit value={time.hours} label="Horas" />
        <TimeUnit value={time.minutes} label="Min" />
        <TimeUnit value={time.seconds} label="Seg" />
      </div>
      
      <p className="mt-16 text-sm italic opacity-50 font-serif">
        &quot;E cada segundo parece pouco perto de uma vida inteira.&quot;
      </p>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-light font-mono tabular-nums">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-[#8b5cf6] mt-2">
        {label}
      </span>
    </div>
  );
}