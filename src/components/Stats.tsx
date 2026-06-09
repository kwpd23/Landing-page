import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div className="stat reveal visible">
      <span className="stat-num" ref={ref as React.RefObject<HTMLSpanElement>}>
        {current}
      </span>
      <span className="stat-plus">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </section>
  )
}
