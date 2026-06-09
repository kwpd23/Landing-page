import { CONTACT_EMAIL, SOCIAL } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="wordmark">build<span className="wordmark-dim">with</span>eric</span>
          {' '}— Eric Cisneros. Desarrollo de software a medida.
        </p>
        <div className="footer-social">
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Eric Cisneros"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Eric Cisneros"
          >
            <Icon name="github" size={18} />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Enviar correo">
            <Icon name="mail" size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
