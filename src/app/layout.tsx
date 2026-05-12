import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingRosas from "@/components/floatingroses"; // Importando as rosas
import EmergencyLove from "@/components/emergencylove";
import MusicPlayer from "@/components/musicplayer";








const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ['italic'], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Nossa História",
  description: "Um mês ao lado da Anna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">
        {/* As rosas ficam aqui para flutuarem sobre tudo */}
        <FloatingRosas /> 
        <EmergencyLove/>
        
        {/* O conteúdo do site (Hero, Contador, etc) */}
        {children}
      </body>
    </html>
  );

  
}