import { useLocation } from 'react-router-dom'
import { PropsWithChildren, useEffect } from 'react'
export const ScrollRestoration = (props: PropsWithChildren) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}
