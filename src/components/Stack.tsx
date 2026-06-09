import { STACK } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function StackCard({ name, level, description, snippet }: (typeof STACK)[number]) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <div className={`stack-card ${revealClass}`} ref={ref}>
      <div className="stack-head">
        <span className="stack-name">{name}</span>
        <span
          className="stack-level"
          role="img"
          aria-label={`Nivel ${level} de 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`level-seg ${i < level ? 'on' : ''}`} />
          ))}
        </span>
      </div>
      <p>{description}</p>
      <code className="stack-snippet">{snippet}</code>
    </div>
  )
}

export default function Stack() {
  const head = useReveal<HTMLDivElement>()
  return (
    <section className="section section-sunken" id="stack">
      <div className="container">
        <div className={`section-head ${head.revealClass}`} ref={head.ref}>
          <p className="kicker">Tecnologías</p>
          <h2>Las herramientas del oficio</h2>
          <p className="section-lede">
            Elegimos la herramienta según el problema, no al revés.
          </p>
        </div>
        <div className="stack-grid">
          {STACK.map((s) => (
            <StackCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
