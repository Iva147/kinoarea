import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../redux/redux-async'

export function useActions() {
  const dispatch = useDispatch()
  return bindActionCreators(Actions, dispatch)
}
