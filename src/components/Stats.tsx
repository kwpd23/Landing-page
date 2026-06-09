import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div className="stat">
      <span className="stat-value" ref={ref as React.RefObject<HTMLSpanElement>}>
        {current}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-row">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
