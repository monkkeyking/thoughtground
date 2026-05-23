import { useState, useEffect, useRef } from 'react'
import { Thoughtcast } from 'react-thoughtcast'
import { SAMPLE_TEXTS } from '../constants'

export default function DurationCard() {
  const [duration, setDuration] = useState(220)
  const idxRef = useRef(0)
  const [text, setText] = useState(SAMPLE_TEXTS[0])

  useEffect(() => {
    const id = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % SAMPLE_TEXTS.length
      setText(SAMPLE_TEXTS[idxRef.current])
    }, duration + 700)
    return () => clearInterval(id)
  }, [duration])

  return (
    <div className="card">
      <div className="card-header-row">
        <span className="card-label">Duration</span>
        <span className="card-badge">{duration}ms</span>
      </div>
      <div className="demo-row">
        <Thoughtcast value={text} mode="slide-up" duration={duration} className="demo-text" />
      </div>
      <input
        type="range"
        className="tg-slider"
        min={80}
        max={900}
        step={20}
        value={duration}
        onChange={e => setDuration(Number(e.target.value))}
      />
    </div>
  )
}
