export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Eric Cisneros — hecho a mano con React +
        TypeScript. Código limpio, como debe ser.
      </p>
      <p className="footer-tip">tip: prueba el código Konami ↑↑↓↓←→←→BA</p>
    </footer>
  )
}
