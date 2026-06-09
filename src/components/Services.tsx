import { SERVICES } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Icon from './Icon'

function ServiceCard({ icon, title, text }: (typeof SERVICES)[number]) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <div className={`service-card ${revealClass}`} ref={ref}>
      <span className="service-icon">
        <Icon name={icon} size={22} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Services() {
  const head = useReveal<HTMLDivElement>()
  return (
    <section className="section section-sunken" id="servicios">
      <div className="container">
        <div className={`section-head ${head.revealClass}`} ref={head.ref}>
          <p className="kicker">Servicios</p>
          <h2>Lo que hacemos por ti</h2>
          <p className="section-lede">
            Tres frentes, un mismo estándar: software que llega a producción y
            se queda funcionando.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
