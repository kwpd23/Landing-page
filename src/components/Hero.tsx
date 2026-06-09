import { useTypewriter } from '../hooks/useTypewriter'
import { HERO_PHRASES } from '../data/content'
import Terminal from './Terminal'

export default function Hero() {
  const phrase = useTypewriter(HERO_PHRASES)

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="kicker">Desarrollo de software a medida</p>
          <h1 className="hero-title">
            Construimos el <span className="accent">software</span> que tu
            negocio necesita.
          </h1>
          <p className="hero-sub">
            Diseñamos, programamos y lanzamos sistemas que de verdad usan tus
            clientes: backends, dispositivos conectados y plataformas de datos.
            Sin humo ni plantillas genéricas.
          </p>
          <p className="hero-spec">
            <span className="hero-rotator">
              {phrase}
              <span className="caret" />
            </span>
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-on-grad">Empecemos tu proyecto</a>
            <a href="#proyectos" className="btn btn-secondary">Ver proyectos</a>
          </div>
        </div>
        <Terminal />
      </div>
    </header>
  )
}
