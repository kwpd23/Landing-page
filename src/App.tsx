import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

function useCursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return
    const move = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
}

function useKonami(onUnlock: () => void) {
  useEffect(() => {
    let progress = 0
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[progress]) {
        progress++
        if (progress === KONAMI.length) {
          progress = 0
          onUnlock()
        }
      } else {
        progress = e.key === KONAMI[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onUnlock])
}

export default function App() {
  const [party, setParty] = useState(false)
  useCursorGlow()
  useKonami(() => {
    setParty(true)
    setTimeout(() => setParty(false), 4000)
  })

  return (
    <div className={party ? 'party' : ''}>
      <div className="noise" />
      <div className="cursor-glow" id="cursorGlow" />
      {party && (
        <div className="konami-banner">🎮 modo retro desbloqueado — respeto.</div>
      )}
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Stack />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}
