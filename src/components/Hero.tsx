import { useTypewriter } from '../hooks/useTypewriter'
import { CONTACT_EMAIL, HERO_PHRASES } from '../data/content'
import Terminal from './Terminal'

export default function Hero() {
  const phrase = useTypewriter(HERO_PHRASES)

  return (
    <header className="hero" id="top">
      <div className="hero-content">
        <p className="hero-pre">{'// hola, mundo'}</p>
        <h1 className="hero-title">
          Soy <span className="accent">Eric Cisneros</span>.<br />
          Construyo software que<br />
          <span className="hero-rotator">
            {phrase}
            <span className="caret">▌</span>
          </span>
        </h1>
        <p className="hero-sub">
          Ingeniería de software a medida: sistemas de alto rendimiento,
          backends sólidos y arquitecturas de datos que escalan. De la idea al
          deploy, sin humo.
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">Ver proyectos ↓</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-ghost">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <Terminal />
    </header>
  )
}
