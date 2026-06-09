import { CONTACT_EMAIL } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="wordmark">build<span className="wordmark-dim">with</span>eric</span>
          {' '}— Eric Cisneros. Desarrollo de software a medida.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </footer>
  )
}
