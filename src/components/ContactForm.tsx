import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // honeypot anti-spam: si está lleno, es un bot
    if (data.get('_honey')) return

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: data.get('nombre'),
          email: data.get('email'),
          mensaje: data.get('mensaje'),
          _subject: 'Nuevo mensaje desde buildwitheric',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-success">
        <p className="form-success-title">Mensaje enviado</p>
        <p>Gracias por escribir. Te responderé en menos de 24 horas.</p>
        <button className="btn btn-primary" type="button" onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="f-nombre">Nombre</label>
        <input id="f-nombre" name="nombre" type="text" required placeholder="Tu nombre" />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" required placeholder="tu@correo.com" />
      </div>
      <div className="field">
        <label htmlFor="f-mensaje">¿Qué necesitas construir?</label>
        <textarea
          id="f-mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntame brevemente tu proyecto…"
        />
      </div>
      {/* honeypot oculto para bots */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="honey" aria-hidden="true" />
      <button className="btn btn-primary btn-form" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'error' && (
        <p className="form-error">
          No se pudo enviar. Inténtalo de nuevo o escríbeme directo a {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  )
}
