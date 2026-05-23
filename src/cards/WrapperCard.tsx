import { useState, useEffect, useRef } from 'react'
import { Thoughtcast } from 'react-thoughtcast'
import { SAMPLE_TEXTS } from '../constants'

export default function WrapperCard() {
  const idxRef = useRef(0)
  const [text, setText] = useState(SAMPLE_TEXTS[0])

  useEffect(() => {
    const id = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % SAMPLE_TEXTS.length
      setText(SAMPLE_TEXTS[idxRef.current])
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card">
      <span className="card-label">Custom wrapper</span>
      <div className="demo-row">
        <Thoughtcast
          value={text}
          mode="crossfade"
          duration={300}
          wrapper={({ value }) => (
            <span className="badge">{value}</span>
          )}
        />
      </div>
      <p className="card-hint">Pass any component via the <code>wrapper</code> prop</p>
    </div>
  )
}
