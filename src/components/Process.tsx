import { PROCESS_STEPS } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Step({ num, title, text }: (typeof PROCESS_STEPS)[number]) {
  const ref = useReveal<HTMLLIElement>()
  return (
    <li className="process-step reveal" ref={ref}>
      <span className="step-num">{num}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  )
}

export default function Process() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section className="section" id="proceso">
      <div className="section-head reveal" ref={headRef}>
        <span className="section-tag">~/proceso</span>
        <h2>Cómo trabajo</h2>
        <p>
          Sin ceremonias innecesarias. Comunicación directa y entregas que
          puedes ver funcionando.
        </p>
      </div>
      <ol className="process">
        {PROCESS_STEPS.map((s) => (
          <Step key={s.num} {...s} />
        ))}
      </ol>
    </section>
  )
}
