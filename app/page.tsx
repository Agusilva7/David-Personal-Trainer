import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import SobreMi from "@/components/SobreMi";
import DMCta from "@/components/DMCta";
import Servicios from "@/components/Servicios";
import Comunidad from "@/components/Comunidad";
import Testimonios from "@/components/Testimonios";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Marquee from "@/components/Marquee";


const marqueeItems = [
  "HYROX", "Running", "Fuerza", "Hipertrofia", "Hybrid Training",
  "Competencia", "Progresión", "Resultado", "Disciplina", "Mentoría",
];
const disciplineColors: Record<string, string> = {
  HYROX: "text-accent border-accent/40",
  Híbrido: "text-purple-400 border-purple-400/40",
  Mentoría: "text-blue-400 border-blue-400/40",
  Running: "text-green-400 border-green-400/40",
  Fuerza: "text-orange-400 border-orange-400/40",
};

export default function Home() {
  return (
    <main className="bg-base min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <SobreMi />
      <Servicios />
      <DMCta /> 
    
      <Comunidad />
         {/* Marquee below */}
        <div className="mt-16">
          <Marquee items={marqueeItems} />
        </div>
      <Testimonios />
      <Formulario />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
