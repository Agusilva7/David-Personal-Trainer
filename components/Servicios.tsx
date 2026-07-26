import Image from "next/image";
import FadeIn from "./FadeIn";
import { config } from "@/lib/config";

export default function Servicios() {
  const { tienda, mentoria } = config;

  return (
    <section id="servicios" className="relative bg-surface py-24 lg:py-32">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background texture */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] text-white/[0.015] leading-none select-none">
          FIT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <span className="section-label">Planes listos para entrenar</span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mt-3">
            <span className="text-stroke">MIS </span>
            <span className="text-accent">PLANES</span>
          </h2>
          <p className="ont-body text-white/65 text-base sm:text-lg leading-relaxed">
            Elegí tu plan, te lo paso armado y empezás a entrenar esta semana. Coordinamos el pago por WhatsApp.
          </p>
        </FadeIn>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tienda.map((plan, i) => (
            <FadeIn key={plan.nombre} delay={(i % 3) * 100}>
              <PlanCard plan={plan} />
            </FadeIn>
          ))}
        </div>

        {/* Mentoría 1 a 1 — premium banner */}
        <FadeIn delay={300} className="mt-12">
          <div className="flex flex-col md:flex-row items-center border border-accent shadow-[0_0_30px_rgba(245,168,0,0.1)] bg-base overflow-hidden ">
           {/* imagen de fondo */}
          <Image
            src="/images/David-Horizontal.JPG"
            alt="fondo"
            fill
            className="object-cover object-top brightness-50 z-0 p-[1px]"
          />

          {/* overlay opcional */}
          <div className="absolute inset-0 bg-black/40 " />
            <div className="w-full md:w-1/2 h-[450px] md:h-auto pb-10 md:pb-0 p-6 lg:p-8 flex  flex-col justify-end md:justify-center z-10">
              <span className="font-condensed text-[19px] tracking-widest uppercase bg-accent text-base px-2 py-0.5 font-bold inline-block mb-3 w-40 text-center ">
                Servicio premium
              </span>
              <h3 className="font-display text-4xl lg:text-6xl text-white leading-none mb-2">
                {mentoria.titulo.toUpperCase()}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed max-w-lg pr-10">
                {mentoria.descripcion}
              </p>
              <a
              href="#formulario"
              className="btn-primary shrink-0 whitespace-nowrap mt-3 w-48 justify-center"
            >
              QUIERO MENTORÍA →
            </a> 
            </div>
            
          
          <div className="relative w-full md:w-1/2 h-64 sm:h-[400px] hidden md:block" >
            <Image
              src="/images/David.png"
              alt="david"
              fill
              className="object-contain object-right sm:overflow-hidden md:overflow-auto brightness-90"
              
            />
           

          </div>
           
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface PlanCardProps {
  plan: {
    imagen: string;
    nombre: string;
    precio: string;
    descripcion: string;
    badge?: string;
    destacado?: boolean;
  };
}

function PlanCard({ plan }: PlanCardProps) {
  const mensaje = encodeURIComponent(`Hola David! Quiero el plan "${plan.nombre}"`);

  return (
    <div
      className={`group relative flex flex-col h-full border transition-all duration-300 hover:-translate-y-1 ${
        plan.destacado
          ? "border-accent/50 bg-base hover:border-accent hover:shadow-[0_0_30px_rgba(245,168,0,0.1)]"
          : "border-surface2 bg-base hover:border-accent/40 hover:shadow-[0_0_30px_rgba(245,168,0,0.05)]"
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <span className="absolute top-3 right-3 z-10 font-condensed text-[10px] tracking-widest uppercase bg-accent text-base px-2 py-0.5 font-bold">
          {plan.badge}
        </span>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
        <Image
          src={plan.imagen}
          alt={plan.nombre}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-90"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
      </div>

      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 h-0.5 transition-all duration-300 ${
          plan.destacado ? "w-full bg-accent" : "w-0 bg-accent group-hover:w-full"
        }`}
      />

      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Name + price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl lg:text-2xl text-white leading-tight">
            {plan.nombre.toUpperCase()}
          </h3>
          <span className="font-display text-2xl text-accent shrink-0">{plan.precio}</span>
        </div>

        {/* Description */}
        <p className="font-body text-white/60 text-sm leading-relaxed flex-1">
          {plan.descripcion}
        </p>

        {/* CTA */}
        <a
          href={`https://wa.me/${config.whatsapp}?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-widest uppercase text-accent hover:text-accentDark transition-colors flex items-center gap-2 mt-2 group/link"
        >
          Quiero este plan
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
