import { AuthFormEnum, AuthFormTypes } from '../actionsTypes/authForm'
import { ErrAuthForm, LoadAuthForm, SetAuthForm } from '../actions/authForm'

export const AuthFormActionCreators = {
  setAuthBy: (payload: AuthFormTypes): SetAuthForm => {
    return { type: AuthFormEnum.ADD_AUTH_FORM, payload }
  },
  loadAuthBy: (): LoadAuthForm => {
    return { type: AuthFormEnum.LOAD_AUTH_FORM }
  },
  errAuthBy: (): ErrAuthForm => {
    return { type: AuthFormEnum.ERR_AUTH_FORM }
  },
}
