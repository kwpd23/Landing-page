import { useState } from 'react'
import { PROJECTS, type Project } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Icon from './Icon'

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const { ref, revealClass } = useReveal<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`project ${revealClass} ${open ? 'open' : ''}`}
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
        <span className="project-icon">
          <Icon name={project.icon} size={20} />
        </span>
        <span className="project-langs">{project.langs}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-detail">
        <dl>
          <div><dt>Problema</dt><dd>{project.problem}</dd></div>
          <div><dt>Solución</dt><dd>{project.solution}</dd></div>
          <div><dt>Resultado</dt><dd>{project.result}</dd></div>
        </dl>
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
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <span className="project-expand">
        {open ? 'Cerrar detalle' : 'Ver detalle técnico'}
      </span>
    </article>
  )
}

export default function Projects() {
  const head = useReveal<HTMLDivElement>()
  const note = useReveal<HTMLParagraphElement>()

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className={`section-head ${head.revealClass}`} ref={head.ref}>
          <p className="kicker">Proyectos</p>
          <h2>Trabajo seleccionado</h2>
          <p className="section-lede">
            Sistemas que diseñamos y construimos de punta a punta. Abre cada
            tarjeta para ver el detalle técnico.
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <p className={`projects-note ${note.revealClass}`} ref={note.ref}>
          Proyectos representativos del tipo de trabajo que realizamos. Los
          detalles de clientes se mantienen bajo acuerdo de confidencialidad.
        </p>
      </div>
    </section>
  )
}
