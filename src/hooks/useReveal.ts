import { useEffect, useRef, useState } from 'react'

/**
 * Revela el elemento cuando entra al viewport.
 * Devuelve el ref y la clase a aplicar ("reveal" / "reveal visible"),
 * gestionada como estado de React para que sobreviva a re-renders.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, revealClass: visible ? 'reveal visible' : 'reveal' }
}
