"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Camada 1: O Vídeo de Fundo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60" // Opacidade para não ofuscar o título
        >
          <source src="/videos/download.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {/* Overlay para dar contraste ao texto */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Camada 2: O Conteúdo (Título) */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-playfair italic text-white drop-shadow-2xl">
          Nossa História
        </h1>
        <p className="mt-4 text-white/80 uppercase tracking-[0.5em] text-sm">
          Goiânia • Desde 12 de Abril
        </p>
      </div>
    </section>
  );
}