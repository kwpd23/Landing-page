export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <span className="logo-bracket">[</span>EC<span className="logo-bracket">]</span>
        <span className="logo-blink">_</span>
      </a>
      <div className="nav-links">
        <a href="#proyectos">proyectos</a>
        <a href="#stack">stack</a>
        <a href="#proceso">proceso</a>
        <a href="#contacto" className="nav-cta">contacto</a>
      </div>
    </nav>
  )
}
