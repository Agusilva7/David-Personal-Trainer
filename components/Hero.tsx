import Image from "next/image";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-end overflow-hidden pb-10">
      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-1.jpg"
        alt="David Silva celebrando en la línea de meta de HYROX"
        fill
        className="object-cover object-[center_20%]"
        priority
        sizes="100vw"
      />

      {/* Cinematic overlay stack */}
      {/* Layer 1: base dark */}
      <div aria-hidden className="absolute inset-0 bg-black/50" />
      {/* Layer 2: top gradient → navbar area legible */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-base/90 via-transparent to-transparent" style={{ height: '35%' }} />
      {/* Layer 3: bottom fade → transition to next section */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-base via-base/80 to-transparent" />
      {/* Layer 4: side vignettes */}
      <div aria-hidden className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base/60 to-transparent" />
      <div aria-hidden className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base/60 to-transparent" />

      {/* Ghost background HYROX */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[30vw] leading-none text-white opacity-[0.04]">
          HYROX
        </span>
      </div>

      {/* Corner accent squares */}
      <div aria-hidden className="absolute top-0 left-0 w-14 h-[3px] bg-accent z-20" />
      <div aria-hidden className="absolute top-0 left-0 w-[3px] h-14 bg-accent z-20" />
      <div aria-hidden className="absolute top-0 right-0 w-14 h-[3px] bg-accent z-20" />
      <div aria-hidden className="absolute top-0 right-0 w-[3px] h-14 bg-accent z-20" />
      <div aria-hidden className="absolute bottom-0 left-0 w-14 h-[3px] bg-accent z-20" />
      <div aria-hidden className="absolute bottom-0 left-0 w-[3px] h-14 bg-accent z-20" />
      <div aria-hidden className="absolute bottom-0 right-0 w-14 h-[3px] bg-accent z-20" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[3px] h-14 bg-accent z-20" />

      {/* Content — center of screen */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-5 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-accent" />
          <p className="font-condensed text-sm tracking-[0.35em] uppercase text-accent/90 italic">
            {config.hero.eyebrow}
          </p>
          <span className="w-8 h-px bg-accent" />
        </div>

        {/* Main title */}
        <div className="flex flex-col items-center leading-none">
          <h1 className="font-display text-xl sm:text-7xl md:text-8xl lg:text-7xl text-white tracking-wide drop-shadow-2xl">
            ¿Estás listo para el cambio?
          </h1>
        
        </div>

        {/* Copy */}
        <p className="font-body text-white/70 text-base sm:text-lg max-w-xl leading-relaxed drop-shadow-lg">
          {config.hero.copy}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <a href="#formulario" className="btn-primary shadow-lg shadow-accent/20">
            ESCRIBIME →
          </a>
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            WHATSAPP
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

  
    </section>
  );
}
