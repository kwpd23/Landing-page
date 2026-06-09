import { useEffect, useState } from 'react'

/** Rota frases con efecto de máquina de escribir. */
export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState(phrases[0])

  useEffect(() => {
    let phraseIdx = 0
    let charIdx = phrases[0].length
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const step = () => {
      const phrase = phrases[phraseIdx]
      if (!deleting) {
        charIdx++
        if (charIdx >= phrase.length) {
          charIdx = phrase.length
          deleting = true
          timer = setTimeout(step, 2200)
          setText(phrase.slice(0, charIdx))
          return
        }
      } else {
        charIdx--
        if (charIdx <= 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
        }
      }
      setText(phrases[phraseIdx].slice(0, charIdx))
      timer = setTimeout(step, deleting ? 35 : 65)
    }

    timer = setTimeout(step, 2200)
    return () => clearTimeout(timer)
  }, [phrases])

  return text
}
