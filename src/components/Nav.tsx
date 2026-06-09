import { useEffect, useState } from 'react'

function LogoMark() {
  // Marca geométrica: cuadrado redondeado + slash ("código / oficio")
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--clay-500)" />
      <path
        d="M38 17 26 47"
        stroke="var(--paper)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <LogoMark />
        <span>Eric Cisneros</span>
      </a>
      <div className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#proceso">Proceso</a>
        <a href="#stack">Stack</a>
        <a href="#contacto" className="nav-cta">Hablemos</a>
      </div>
    </nav>
  )
}
