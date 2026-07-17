import Image from "next/image";
import FadeIn from "./FadeIn";
import { config } from "@/lib/config";

export default function SobreMi() {
  const { sobreMi } = config;

  return (
    <section id="sobre-mi" className="relative bg-base py-20 lg:py-28 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: two photos staggered */}
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Photo 1 */}
              <div className="relative aspect-[3/4] overflow-hidden bg-surface2 group">
                <Image
                  src="/images/hyrox-rope-pull.jpg"
                  alt="David Silva en la estación de sled pull en HYROX"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-75"
                  sizes="(max-width: 1024px) 40vw, 22vw"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-base/30" />
                {/* Left accent bar */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-accent" />
              </div>

              {/* Photo 2 — shifted down */}
              <div className="relative aspect-[3/4] overflow-hidden bg-surface2 group mt-10">
                <Image
                  src="/images/David-Rugby-Old.png"
                  alt="David Silva en el podio de tiempos de HYROX Buenos Aires"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-75"
                  sizes="(max-width: 1024px) 40vw, 22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-base/30" />
                {/* Right accent bar */}
                <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-accent" />
              </div>

              
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn direction="right" delay={150}>
            <div className="flex flex-col gap-7">
              {/* Label */}
              <span className="section-label">David Silva</span>

              {/* Title */}
              <h2 className="font-display leading-none">
                <span className="text-white text-5xl sm:text-6xl lg:text-7xl block">
                  {sobreMi.titulo[0]}
                </span>
                <span className="text-accent text-6xl sm:text-7xl lg:text-8xl block">
                  {sobreMi.titulo[1]}
                </span>
              </h2>

              {/* Description */}
              <p className="font-body text-white/65 text-base sm:text-lg leading-relaxed">
                {sobreMi.descripcion}
              </p>
              <p className="font-body text-white/65 text-base sm:text-lg leading-relaxed">No entreno personas desde un escritorio. Entreno desde la cancha, desde la pista, desde el dolor muscular del día siguiente. Porque cada límite que superé me enseñó que siempre hay un poco más adentro tuyo esperando salir.</p>



              {/* Discipline tags */}
              <div className="flex flex-wrap gap-2">
                {sobreMi.disciplinas.map((d) => (
                  <span
                    key={d}
                    className="font-condensed text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 border border-white/10 text-white/50 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <a href="#formulario" className="btn-primary self-start">
                ESCRIBIME →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
