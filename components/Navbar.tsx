"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#formulario" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div
        className={`flex items-center gao-0 md:gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-base/90 backdrop-blur-md border-white/10 shadow-lg shadow-black/40"
            : "bg-black/50 backdrop-blur border-white/10"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className="font-condensed text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all duration-200"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
