import { useEffect, useRef, useState } from 'react'
import { CONTACT_EMAIL, PROJECTS, STACK } from '../data/content'

interface Line {
  type: 'cmd' | 'out' | 'err'
  text: string
}

const BOOT_LINES: Line[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Eric Cisneros — software engineer' },
  { type: 'cmd', text: './servicios --list' },
  { type: 'out', text: '✓ APIs y backends de alto rendimiento' },
  { type: 'out', text: '✓ Sistemas embebidos y firmware' },
  { type: 'out', text: '✓ Pipelines de datos y SQL' },
  { type: 'out', text: '✓ CLIs y herramientas internas' },
]

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase()
  switch (cmd) {
    case '':
      return []
    case 'help':
      return [
        { type: 'out', text: 'comandos disponibles:' },
        { type: 'out', text: '  about     quién soy' },
        { type: 'out', text: '  stack     lenguajes y herramientas' },
        { type: 'out', text: '  projects  proyectos destacados' },
        { type: 'out', text: '  contact   cómo contactarme' },
        { type: 'out', text: '  clear     limpiar terminal' },
        { type: 'out', text: '  sudo hire-me   👀' },
      ]
    case 'about':
    case 'whoami':
      return [
        { type: 'out', text: 'Eric Cisneros. Ingeniero de software.' },
        { type: 'out', text: 'Me contratan para construir sistemas que funcionan' },
        { type: 'out', text: 'y se quedan funcionando. Rust, C, Python y SQL.' },
      ]
    case 'stack':
      return STACK.map((s) => ({
        type: 'out' as const,
        text: `  ${s.name.padEnd(16)} ${'▰'.repeat(s.level)}${'▱'.repeat(5 - s.level)}`,
      }))
    case 'projects':
    case 'proyectos':
      return PROJECTS.map((p) => ({
        type: 'out' as const,
        text: `  ${p.icon} ${p.title}`,
      }))
    case 'contact':
    case 'contacto':
      return [
        { type: 'out', text: `email: ${CONTACT_EMAIL}` },
        { type: 'out', text: 'respondo en menos de 24h.' },
      ]
    case 'sudo hire-me':
      return [
        { type: 'out', text: '[sudo] permiso concedido ✔' },
        { type: 'out', text: `excelente decisión. escríbeme: ${CONTACT_EMAIL}` },
      ]
    case 'ls':
      return [
        { type: 'out', text: 'proyectos/  stack/  proceso/  contacto.md' },
      ]
    case 'rm -rf /':
      return [{ type: 'err', text: 'nice try 🙂 mis sistemas tienen respaldos.' }]
    case 'exit':
      return [{ type: 'out', text: 'no hay salida. solo buen software.' }]
    default:
      return [
        { type: 'err', text: `comando no encontrado: ${cmd}` },
        { type: 'out', text: "escribe 'help' para ver los comandos." },
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
    <div className="hero-terminal reveal visible">
      <div className="term-bar">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
        <span className="term-title">eric@dev — zsh</span>
      </div>
      <div
        className="term-body"
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className={`term-line term-${line.type}`}>
            {line.type === 'cmd' && <span className="term-prompt">eric@dev:~$&nbsp;</span>}
            {line.text}
          </div>
        ))}
        {booted && (
          <form className="term-input-line" onSubmit={onSubmit}>
            <span className="term-prompt">eric@dev:~$&nbsp;</span>
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
        ↳ terminal real: escribe <code>help</code> y presiona Enter
      </p>
    </div>
  )
}
