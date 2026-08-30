import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { stats } from '../data/site'

function useCountUp(target, run) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur)
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run])
  return val
}

function Stat({ value, suffix, label, run }) {
  const { tt, lang } = useLang()
  const n = useCountUp(value, run)
  return (
    <div className="stat">
      <b>
        {n.toLocaleString(lang === 'od' ? 'or-IN' : 'en-IN')}
        {suffix}
      </b>
      <span>{tt(label)}</span>
    </div>
  )
}

export default function StatBand() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section stats-band" ref={ref}>
      <div className="container">
        <div className="grid grid-4">
          {stats.map((s, i) => (
            <Stat key={i} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  )
}
