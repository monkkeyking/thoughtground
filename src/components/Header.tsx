interface Props {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function Header({ theme, onToggle }: Props) {
  return (
    <header className="header">
      <span className="logo">thoughtground</span>
      <button className="theme-btn" onClick={onToggle} aria-label="Toggle theme">
        {theme === 'light' ? '☾' : '☀'}
      </button>
    </header>
  )
}
