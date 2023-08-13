import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../redux/redux-async'
import { useMemo } from 'react'

export function useActions() {
  const dispatch = useDispatch()
  const actions = useMemo(() => bindActionCreators(Actions, dispatch), [dispatch])
  return actions
}
