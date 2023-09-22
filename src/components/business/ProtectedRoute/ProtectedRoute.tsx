import { PropsWithChildren } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useTypedSelector(state => state.user.user)
  if (!user) return <Navigate to={'/'} />
  return <>{children}</>
}
