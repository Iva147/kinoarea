import { useEffect, useState, useTransition } from 'react'

export const useScroll = (scrollY: number = 0) => {
  const [isCrossed, setCrossed] = useState(false)
  const [, startTransition] = useTransition()

  const onScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const scrollThreshold = (windowHeight / 3) * 2 + scrollY

    if (scrollTop >= scrollThreshold) {
      setCrossed(true)
      return
    }

    setCrossed(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        onScroll?.()
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  return isCrossed
}
