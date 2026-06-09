import { TESTIMONIALS, type Testimonial } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Card({ quote, role, sector, initials }: Testimonial) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <figure className={`testimonial ${revealClass}`} ref={ref}>
      <span className="quote-mark" aria-hidden="true">&ldquo;</span>
      <blockquote>{quote}</blockquote>
      <figcaption className="testimonial-author">
        <span className="avatar" aria-hidden="true">{initials}</span>
        <span>
          <strong>{role}</strong>
          <span className="testimonial-sector">{sector}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const head = useReveal<HTMLDivElement>()
  const note = useReveal<HTMLParagraphElement>()

  return (
    <section className="section section-sunken" id="testimonios">
      <div className="container">
        <div className={`section-head ${head.revealClass}`} ref={head.ref}>
          <p className="kicker">Testimonios</p>
          <h2>Lo que dicen de mi trabajo</h2>
          <p className="section-lede">
            Algunas opiniones de personas con las que he colaborado.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <Card key={t.initials} {...t} />
          ))}
        </div>
        <p className={`projects-note ${note.revealClass}`} ref={note.ref}>
          Testimonios anonimizados a petición de los clientes. Cargos y sectores
          son reales; los nombres se omiten por confidencialidad.
        </p>
      </div>
    </section>
  )
}
