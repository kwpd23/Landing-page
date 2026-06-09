import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard no disponible (http o permisos): el mailto sigue funcionando
    }
  }

  return (
    <section className="section contact" id="contacto">
      <div className="contact-card reveal" ref={ref}>
        <span className="section-tag">~/contacto</span>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Cuéntame qué necesitas construir. Respondo en menos de 24 horas.</p>
        <a
          className="btn btn-primary btn-big"
          href={`mailto:${CONTACT_EMAIL}?subject=Proyecto%20de%20software`}
        >
          {CONTACT_EMAIL}
        </a>
        <button className="btn btn-ghost" type="button" onClick={copyEmail}>
          {copied ? '✓ copiado' : 'copiar email'}
        </button>
        <p className="contact-alt">
          o escribe <code>contact</code> en la terminal de arriba 😉
        </p>
      </div>
    </section>
  )
}
