import { ABOUT } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const text = useReveal<HTMLDivElement>()
  const card = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="sobre-mi">
      <div className="container about-grid">
        <div className={`about-text ${text.revealClass}`} ref={text.ref}>
          <p className="kicker">Sobre mí</p>
          <h2>Un solo responsable, de principio a fin</h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p className="about-para" key={i}>{p}</p>
          ))}
        </div>
        <div className={`about-card ${card.revealClass}`} ref={card.ref}>
          <p className="about-card-title">Dónde he construido</p>
          <ul className="about-levels">
            {ABOUT.levels.map((lvl) => (
              <li key={lvl.label}>
                <span className="level-tag">{lvl.label}</span>
                <p>{lvl.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
