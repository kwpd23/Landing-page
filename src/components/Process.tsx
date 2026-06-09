import { PROCESS_STEPS } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Step({ num, title, text }: (typeof PROCESS_STEPS)[number]) {
  const { ref, revealClass } = useReveal<HTMLLIElement>()
  return (
    <li className={`process-step ${revealClass}`} ref={ref}>
      <span className="step-num">{num}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  )
}

export default function Process() {
  const head = useReveal<HTMLDivElement>()
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className={`section-head ${head.revealClass}`} ref={head.ref}>
          <p className="kicker">Proceso</p>
          <h2>Cómo trabajamos</h2>
          <p className="section-lede">
            Sin ceremonias innecesarias. Comunicación directa y avances que
            puedes ver funcionando.
          </p>
        </div>
        <ol className="process">
          {PROCESS_STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </ol>
      </div>
    </section>
  )
}
