import { useState, useEffect, useRef } from 'react'
import { Thoughtcast, Loader, type LoaderType } from 'react-thoughtcast'

const LOADER_TYPES: LoaderType[] = [
  'typing', 'ripple', 'bounce', 'morph', 'fade', 'spinner', 'spring', 'dna',
]

const STATUS_TEXTS = [
  'Searching the web…',
  'Reading 12 sources',
  'Cross-checking facts',
  'Drafting an answer',
  'Done.',
]

interface Props {
  accent: string
}

export default function LoadersCard({ accent }: Props) {
  const [loaderType, setLoaderType] = useState<LoaderType>('typing')
  const [statusText, setStatusText] = useState(STATUS_TEXTS[0])
  const [running, setRunning] = useState(false)
  const idxRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      const next = idxRef.current + 1
      if (next >= STATUS_TEXTS.length) {
        setRunning(false)
        idxRef.current = 0
        return
      }
      idxRef.current = next
      setStatusText(STATUS_TEXTS[next])
    }, 1100)
    return () => clearInterval(id)
  }, [running])

  function play() {
    idxRef.current = 0
    setStatusText(STATUS_TEXTS[0])
    setRunning(true)
  }

  return (
    <div className="card span-2">
      <span className="card-label">Loaders</span>
      <div className="loader-live">
        <Thoughtcast
          value={statusText}
          mode="slide-up"
          duration={200}
          loader={loaderType}
          loaderColor={accent}
          className="demo-text"
        />
        <button className="tg-btn" onClick={play} disabled={running}>
          {running ? 'running…' : '▶ play'}
        </button>
      </div>
      <div className="loader-grid">
        {LOADER_TYPES.map(l => (
          <button
            key={l}
            className={`loader-cell${loaderType === l ? ' active' : ''}`}
            onClick={() => setLoaderType(l)}
          >
            <div className="loader-stage">
              <Loader type={l} color={accent} />
            </div>
            <span className="loader-name">{l}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
