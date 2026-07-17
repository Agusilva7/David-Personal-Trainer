"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import { config } from "@/lib/config";

const objetivos = [
  "Prepararme para HYROX",
  "Aumentar mi fuerza",
  "Ganar masa muscular",
  "Mejorar mi running",
  "Entrenamiento híbrido",
  "Mentoría personalizada",
  "Otro",
];

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push(`Hola David! Soy *${nombre || "un interesado"}*.`);
    if (objetivo) lines.push(`Mi objetivo: *${objetivo}*.`);
    if (mensaje) lines.push(`Mensaje: ${mensaje}`);
    if (telefono) lines.push(`Mi número: ${telefono}`);
    lines.push(`\nQuiero conocer más sobre tus planes de entrenamiento. ¡Gracias!`);

    const text = lines.join("\n");
    window.open(
      `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="formulario" className="relative bg-base py-24 lg:py-32">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background ghost text */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <span className="font-display text-[18vw] text-white/[0.02] leading-none select-none">
          CONTACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: text */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <span className="section-label">Empezá ahora</span>
                <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mt-3">
                  <span className="text-accent">EMPEZÁ</span>
                  <br />
                  <span className="text-stroke">HOY</span>
                </h2>
              </div>

              <p className="font-body text-white/60 text-lg leading-relaxed">
                Completá el formulario y te contacto por WhatsApp para armar tu
                plan personalizado. Sin compromisos, sin letra chica.
              </p>

              {/* Value props */}
              <div className="flex flex-col gap-4">
                {[
                  "Plan 100% personalizado según tu nivel",
                  "Progresión inteligente semana a semana",
                  "Soporte directo por WhatsApp",
                  "Análisis de progreso y ajustes continuos",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 text-accent font-bold">
                      ✓
                    </span>
                    <span className="font-body text-white/60 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Corner decoration */}
              <div className="relative hidden lg:block">
                <div className="w-24 h-24 border-l-2 border-b-2 border-accent/20" />
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-5 p-8 lg:p-10 border border-surface2 bg-surface"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />

              <h3 className="font-condensed font-bold tracking-widest uppercase text-white/70 text-xs mb-2">
                Contame sobre vos
              </h3>

              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed text-xs tracking-widest uppercase text-white/40">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="bg-surface2 border border-surface2 focus:border-accent/60 text-white placeholder-white/20 px-4 py-3 font-body text-sm outline-none transition-colors"
                />
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed text-xs tracking-widest uppercase text-white/40">
                  WhatsApp / Teléfono
                </label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+54 9 ..."
                  className="bg-surface2 border border-surface2 focus:border-accent/60 text-white placeholder-white/20 px-4 py-3 font-body text-sm outline-none transition-colors"
                />
              </div>

              {/* Objetivo */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed text-xs tracking-widest uppercase text-white/40">
                  ¿Cuál es tu objetivo? *
                </label>
                <select
                  required
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  className="bg-surface2 border border-surface2 focus:border-accent/60 text-white px-4 py-3 font-body text-sm outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Seleccioná un objetivo
                  </option>
                  {objetivos.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed text-xs tracking-widest uppercase text-white/40">
                  Contame más (opcional)
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Nivel actual, experiencia, lesiones, horarios..."
                  rows={3}
                  className="bg-surface2 border border-surface2 focus:border-accent/60 text-white placeholder-white/20 px-4 py-3 font-body text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full mt-2 justify-center">
                Enviar por WhatsApp →
              </button>

              <p className="font-body text-white/30 text-xs text-center">
                Al hacer clic abrirá WhatsApp con tu mensaje pre-completado.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
