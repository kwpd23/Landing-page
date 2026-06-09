import { useEffect, useRef, useState } from 'react'
import { CONTACT_EMAIL, PROJECTS, STACK } from '../data/content'

interface Line {
  type: 'cmd' | 'out' | 'err'
  text: string
}

const BOOT_LINES: Line[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Eric Cisneros — ingeniería de software' },
  { type: 'cmd', text: './servicios --list' },
  { type: 'out', text: '  backends y APIs de alto rendimiento' },
  { type: 'out', text: '  sistemas embebidos y firmware' },
  { type: 'out', text: '  plataformas de datos y SQL' },
  { type: 'out', text: '  herramientas internas y automatización' },
]

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase()
  switch (cmd) {
    case '':
      return []
    case 'help':
      return [
        { type: 'out', text: 'comandos disponibles:' },
        { type: 'out', text: '  about     perfil profesional' },
        { type: 'out', text: '  stack     lenguajes y herramientas' },
        { type: 'out', text: '  projects  proyectos destacados' },
        { type: 'out', text: '  contact   información de contacto' },
        { type: 'out', text: '  clear     limpiar terminal' },
      ]
    case 'about':
    case 'whoami':
      return [
        { type: 'out', text: 'Eric Cisneros — ingeniería de software.' },
        { type: 'out', text: 'Más de 6 años construyendo sistemas en producción:' },
        { type: 'out', text: 'backends, firmware y plataformas de datos.' },
        { type: 'out', text: 'Stack principal: Rust, C, Python, SQL.' },
      ]
    case 'stack':
      return STACK.map((s) => ({
        type: 'out' as const,
        text: `  ${s.name.padEnd(16)} ${'#'.repeat(s.level)}${'.'.repeat(5 - s.level)}`,
      }))
    case 'projects':
    case 'proyectos':
      return PROJECTS.map((p) => ({
        type: 'out' as const,
        text: `  - ${p.title}`,
      }))
    case 'contact':
    case 'contacto':
      return [
        { type: 'out', text: `email: ${CONTACT_EMAIL}` },
        { type: 'out', text: 'respuesta en menos de 24 horas.' },
      ]
    case 'ls':
      return [
        { type: 'out', text: 'servicios/  proyectos/  stack/  contacto.md' },
      ]
    default:
      return [
        { type: 'err', text: `comando no encontrado: ${cmd}` },
        { type: 'out', text: 'escribe help para ver los comandos.' },
      ]
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Animación de arranque: las líneas aparecen una a una.
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setLines(BOOT_LINES.slice(0, i))
      if (i >= BOOT_LINES.length) {
        clearInterval(interval)
        setBooted(true)
      }
    }, 280)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim()
    setInput('')
    if (cmd.toLowerCase() === 'clear') {
      setLines([])
      return
    }
    setLines((prev) => [...prev, { type: 'cmd', text: cmd }, ...runCommand(cmd)])
  }

  return (
    <div className="hero-terminal">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">eric@taller — sh</span>
      </div>
      <div
        className="term-body"
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className={`term-line term-${line.type}`}>
            {line.type === 'cmd' && <span className="term-prompt">$&nbsp;</span>}
            {line.text}
          </div>
        ))}
        {booted && (
          <form className="term-input-line" onSubmit={onSubmit}>
            <span className="term-prompt">$&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal interactiva"
            />
          </form>
        )}
      </div>
      <p className="term-hint">
        Terminal real — escribe <code>help</code> y presiona Enter
      </p>
    </div>
  )
}
