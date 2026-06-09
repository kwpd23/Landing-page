import { useState } from 'react'
import { PROJECTS, type Project } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const ref = useReveal<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`project reveal ${open ? 'open' : ''}`}
      tabIndex={0}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setOpen((o) => !o)
        }
      }}
    >
      <div className="project-top">
        <span className="project-icon">{project.icon}</span>
        <div className="project-langbar">
          {project.langBar.map((seg) => (
            <span
              key={seg.lang}
              className={`lb ${seg.lang}`}
              style={{ width: `${seg.pct}%` }}
              title={`${seg.lang} ${seg.pct}%`}
            />
          ))}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-detail">
        <ul>
          <li><strong>Problema:</strong> {project.problem}</li>
          <li><strong>Solución:</strong> {project.solution}</li>
          <li><strong>Resultado:</strong> {project.result}</li>
        </ul>
        <div className="metrics">
          {project.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <span>{m.label}</span>
              <strong>{m.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t.name} className={`tag ${t.kind ? `t-${t.kind}` : ''}`}>
            {t.name}
          </span>
        ))}
      </div>
      <span className="project-expand">{open ? '− cerrar' : '+ detalles'}</span>
    </article>
  )
}

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>()
  const noteRef = useReveal<HTMLParagraphElement>()

  return (
    <section className="section" id="proyectos">
      <div className="section-head reveal" ref={headRef}>
        <span className="section-tag">~/proyectos</span>
        <h2>Trabajo seleccionado</h2>
        <p>
          Algunos sistemas que he diseñado y construido. Haz clic en cada
          tarjeta para ver los detalles técnicos.
        </p>
      </div>
      <div className="projects">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <p className="projects-note reveal" ref={noteRef}>
        * Proyectos representativos del tipo de trabajo que realizo. Detalles
        de clientes bajo NDA.
      </p>
    </section>
  )
}
