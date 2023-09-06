import { scrollTop } from '../../../utils/scrollTop'
import { ReactComponent as ArrowTop } from '../../../assets/images/general/ArrowTop.svg'
import { useScroll } from '../../../hooks/useScroll'
import { twMerge } from 'tailwind-merge'
import { useCallback, useEffect, useRef, useState } from 'react'

const ANIMATION_TIME = 700
export const ScrollTopArrow = () => {
  const isScrolled = useScroll()
  const [hidden, setHidden] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const hideHandler = useCallback(() => {
    timer.current = setTimeout(() => {
      setHidden(true)
    }, ANIMATION_TIME)
  }, [setHidden])

  useEffect(() => {
    if (!isScrolled) {
      hideHandler()
    } else {
      setHidden(false)
    }

    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [isScrolled])

  if (hidden) return null

  return (
    <ArrowTop
      onClick={() => scrollTop()}
      className={twMerge(
        `w-[50px] h-[50px] fixed bottom-[14.7%] right-[2.65%] z-50 transition-opacity duration-500 md:w-[73px] md:h-[73px]`,
        !isScrolled ? 'opacity-0' : ''
      )}
    />
  )
}
