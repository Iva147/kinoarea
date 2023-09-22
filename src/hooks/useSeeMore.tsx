import { RefObject, useEffect, useRef, useState } from 'react'

interface seeMoreReturn<T extends HTMLElement> {
  ref: RefObject<T>
  isSeeMorePossible: boolean
  isMatchedSize: boolean
  setSeeMore: (val: boolean) => void
}
export function useSeeMore<T extends HTMLElement>(): seeMoreReturn<T> {
  const ref = useRef<T>(null)
  const [isMatched, setMatched] = useState(false)
  const [isSeeMorePossible, setSeeMorePossible] = useState(true)

  useEffect(() => {
    const container = ref.current

    if (container) {
      if (container.scrollHeight > container.clientHeight) setSeeMorePossible(true)
      if (container.scrollHeight <= container.clientHeight) {
        setMatched(true)
        setSeeMorePossible(false)
      }
    }
  }, [])

  const setSeeMore = (val: boolean) => setSeeMorePossible(val)

  return { ref, isSeeMorePossible, setSeeMore, isMatchedSize: isMatched }
}
