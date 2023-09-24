import { AuthFormActions } from '../actions/authForm'
import { AuthFormEnum } from '../actionsTypes/authForm'

interface InitialState {
  authBy: 'login' | 'register' | null
}

const initialState: InitialState = {
  authBy: null,
}
export const authFormReducer = (state = initialState, action: AuthFormActions) => {
  switch (action.type) {
    case AuthFormEnum.ADD_AUTH_FORM:
      return { authBy: action.payload }
    default:
      return state
  }
}
