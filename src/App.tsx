import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TryModeCard from './cards/TryModeCard'
import AllModesCard from './cards/AllModesCard'
import DurationCard from './cards/DurationCard'
import WrapperCard from './cards/WrapperCard'
import LoadersCard from './cards/LoadersCard'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const accent = theme === 'light' ? '#5b5ef4' : '#7c7ef5'

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} onToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
      <Hero />
      <section className="examples">
        <div className="grid">
          <TryModeCard />
          <AllModesCard />
          <DurationCard />
          <WrapperCard />
          <LoadersCard accent={accent} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
