import { IUser } from '../../api/types/responses'
import { UserActions } from '../actions/user'
import { User } from '../actionsTypes/user'

interface InitialState {
  user: IUser | null
  loading: boolean
  error: string | null
}
const initialState: InitialState = {
  user: null,
  loading: false,
  error: null,
}
export const userReducer = (state = initialState, action: UserActions): InitialState => {
  switch (action.type) {
    case User.LOAD_USER:
      return { ...state, loading: true }
    case User.ADD_USER:
      return { ...state, user: action.payload, loading: false, error: null }
    case User.REMOVE_USER:
      return { ...state, user: null, loading: false, error: null }
    case User.ERROR_USER:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
