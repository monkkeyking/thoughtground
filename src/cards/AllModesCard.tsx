import { useState, useEffect, useRef } from 'react'
import { Thoughtcast } from 'react-thoughtcast'
import { MODES, SAMPLE_TEXTS } from '../constants'

export default function AllModesCard() {
  const idxRef = useRef(0)
  const [text, setText] = useState(SAMPLE_TEXTS[0])

  useEffect(() => {
    const id = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % SAMPLE_TEXTS.length
      setText(SAMPLE_TEXTS[idxRef.current])
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card span-2">
      <span className="card-label">All modes at once</span>
      <div className="modes-grid">
        {MODES.map(m => (
          <div key={m} className="mode-cell">
            <span className="mode-name">{m}</span>
            <Thoughtcast value={text} mode={m} duration={220} className="mode-text" />
          </div>
        ))}
      </div>
    </div>
  )
}
