import FadeIn from "./FadeIn";
import Marquee from "./Marquee";
import { config } from "@/lib/config";

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

export default function Testimonios() {
  const { testimonios } = config;

  return (
    <section className="relative bg-surface py-24 lg:py-32">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <span className="section-label">Resultados reales</span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mt-3">
            <span className="text-white">LO QUE </span>
            <span className="text-stroke">DICEN</span>
          </h2>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="relative flex flex-col gap-5 p-7 border border-surface2 bg-base hover:border-accent/30 transition-all duration-300 h-full group">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                {/* Quote mark */}
                <span
                  aria-hidden
                  className="font-display text-6xl text-accent/20 leading-none -mb-4 select-none"
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-accent fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="font-body text-white/70 text-base leading-relaxed flex-1">
                  "{t.texto}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-surface2">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-9 h-9 rounded-full bg-surface2 flex items-center justify-center border border-surface2">
                      <span className="font-display text-sm text-accent">
                        {t.nombre[0]}
                      </span>
                    </div>
                    <span className="font-condensed font-bold tracking-wider uppercase text-white text-sm">
                      {t.nombre}
                    </span>
                  </div>
                  <span
                    className={`font-condensed text-[10px] tracking-widest uppercase px-2.5 py-1 border ${
                      disciplineColors[t.disciplina] || "text-white/40 border-white/20"
                    }`}
                  >
                    {t.disciplina}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
