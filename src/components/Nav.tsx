import { useEffect, useState } from 'react'

function LogoMark() {
  // Marca geométrica: cuadrado redondeado + slash ("código / oficio")
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="0.5" stopColor="#c44fe8" />
          <stop offset="1" stopColor="#635bff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logo-grad)" />
      <path
        d="M38 17 26 47"
        stroke="#fff"
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
        <span className="wordmark">
          build<span className="wordmark-dim">with</span>eric
        </span>
      </a>
      <div className="nav-links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#stack">Stack</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto" className="nav-cta">Hablemos</a>
      </div>
    </nav>
  )
}
