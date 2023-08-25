import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export const useLastPathSegment = () => {
  const location = useLocation()
  const lastSegment = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean)
    return segments[segments.length - 1]
  }, [location])

  return lastSegment
}
