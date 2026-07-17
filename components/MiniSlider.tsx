'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Foto = {
  src: string
  alt: string
}

export default function MiniSlider({ fotos, className = '' }: { fotos: Foto[], className?: string }) {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual(prev => (prev + 1) % fotos.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className={`relative aspect-[3/4] overflow-hidden bg-surface2 group ${className}`}>
      {fotos.map((foto, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === actual ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            className="object-cover object-center brightness-75 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 45vw, 22vw"
          />
        </div>
      ))}
    </div>
  )
}