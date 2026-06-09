import { STACK } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function StackCard({ name, level, description, snippet, accent }: (typeof STACK)[number]) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      className="stack-card reveal"
      ref={ref}
      style={{ '--accent-color': accent } as React.CSSProperties}
    >
      <div className="stack-head">
        <span className="stack-name">{name}</span>
        <span className="stack-level">
          {'▰'.repeat(level)}
          {'▱'.repeat(5 - level)}
        </span>
      </div>
      <p>{description}</p>
      <code className="stack-snippet">{snippet}</code>
    </div>
  )
}

export default function Stack() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section className="section" id="stack">
      <div className="section-head reveal" ref={headRef}>
        <span className="section-tag">~/stack</span>
        <h2>Lenguajes y herramientas</h2>
        <p>
          Elijo la herramienta según el problema, no al revés. Pasa el cursor
          sobre cada lenguaje.
        </p>
      </div>
      <div className="stack-grid">
        {STACK.map((s) => (
          <StackCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}
