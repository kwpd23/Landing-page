import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Icon from './Icon'
import ContactForm from './ContactForm'

export default function Contact() {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard no disponible: el mailto sigue funcionando
    }
  }

  return (
    <section className="contact" id="contacto">
      <div className={`container contact-grid ${revealClass}`} ref={ref}>
        <div className="contact-info">
          <p className="kicker kicker-light">Contacto</p>
          <h2>Empecemos tu proyecto</h2>
          <p className="contact-lede">
            Cuéntame qué necesitas construir. Te respondo en menos de 24 horas
            con los siguientes pasos.
          </p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${CONTACT_EMAIL}?subject=Proyecto%20de%20software`}
            >
              <Icon name="mail" size={18} />
              {CONTACT_EMAIL}
            </a>
            <button className="btn btn-ghost-light" type="button" onClick={copyEmail}>
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              {copied ? 'Copiado' : 'Copiar email'}
            </button>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
