import { useState, useEffect } from 'react'
import { Thoughtcast } from 'react-thoughtcast'

const MOTTOS = [
  'Animate only what changed.',
  'State, rendered beautifully.',
  'Words in motion.',
  'Less flash. More flow.',
]

export default function Hero() {
  const [mottoIdx, setMottoIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setMottoIdx(i => (i + 1) % MOTTOS.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-badges">
        <span className="badge-early">early development</span>
        <span className="badge-version">v0.3.0</span>
      </div>
      <p className="hero-eyebrow">react-thoughtcast</p>
      <div className="hero-motto">
        <Thoughtcast value={MOTTOS[mottoIdx]} mode="crossfade" duration={450} />
      </div>
      <p className="hero-sub">A live playground for the Thoughtcast component</p>
      <p className="hero-by">by <a href="https://github.com/monkkeyking" target="_blank" rel="noreferrer">monkkeyking</a></p>
      <div className="hero-arrow">↓</div>
    </section>
  )
}
