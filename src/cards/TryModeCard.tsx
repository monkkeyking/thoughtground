import { useState } from 'react'
import { Thoughtcast, type AnimationMode } from 'react-thoughtcast'
import { MODES } from '../constants'

export default function TryModeCard() {
  const [text, setText] = useState('Hello, world!')
  const [input, setInput] = useState('Hello, world!')
  const [mode, setMode] = useState<AnimationMode>('slide-up')

  return (
    <div className="card span-2">
      <span className="card-label">Try a mode</span>
      <div className="demo-row">
        <Thoughtcast value={text} mode={mode} duration={220} className="demo-text" />
      </div>
      <div className="input-row">
        <input
          className="tg-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && setText(input)}
          placeholder="Type something…"
        />
        <button className="tg-btn" onClick={() => setText(input)}>Apply</button>
      </div>
      <div className="pill-row">
        {MODES.map(m => (
          <button
            key={m}
            className={`pill${mode === m ? ' active' : ''}`}
            onClick={() => setMode(m)}
          >{m}</button>
        ))}
      </div>
    </div>
  )
}
