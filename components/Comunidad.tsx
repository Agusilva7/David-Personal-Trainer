import Image from "next/image";
import FadeIn from "./FadeIn";

import { config } from "@/lib/config";
import MiniSlider from './MiniSlider'

const sliderUno = [
  { src: '/images/Comunidad-Tope-1-Vertical.jpg', alt: 'foto 1a' },
  { src: '/images/Comunidad-Tope-Entrenando-1.jpg', alt: 'foto 1b' },
]

const sliderDos = [
  { src: '/images/Comunidad-Tope-Entrenando-2.jpg', alt: 'foto 2a' },
  { src: '/images/Comunidad-Tope-Entrenando-3.jpg', alt: 'foto 2b' },
]
export default function Comunidad() {
  const { comunidad, tope } = config;

  return (
    <section id="comunidad" className="relative bg-base py-20 lg:py-28">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left: text */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-6 ">
              {/* TOPE logo */}
              <div className="relative flex min-h-[80px] -mb-4">
                  <Image
                  src="/images/Logo-Tope.png"
                  alt="logo tope"
                  fill
                  className="object-contain object-left absolute inset-1 z-10"
                  sizes=""
                />

              </div>
              
              {/* Title */}
              <h2 className="font-display leading-none">
                <span className="text-white text-5xl sm:text-6xl lg:text-7xl block">
                  {comunidad.titulo[0]}
                </span>
                <span className="text-accent text-5xl sm:text-6xl lg:text-7xl block">
                  {comunidad.titulo[1]}
                </span>
              </h2>
            
              <p className="font-condensed text-sm font-bold tracking-widest uppercase text-white  -mt-4">
                {tope.handle}
              </p>

              <div className="flex flex-col gap-3">
                {comunidad.descripcion.split("\n\n").map((p, i) => (
                  <p key={i} className="font-body text-white/60 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2 ">
                <a href={tope.unirse} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  UNIRSE A TOPE
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </a>
                <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="btn-dark text-sm">
                  INSTAGRAM
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: two photos */}
          <FadeIn direction="right" delay={150}>
             <div className="grid grid-cols-2 gap-4 pt-8 md:pt-0">
              <MiniSlider fotos={sliderUno} />
              <MiniSlider fotos={sliderDos} className="mt-8" />
            </div>
          </FadeIn>
        </div>

      </div>
   
    </section>
  );
}
