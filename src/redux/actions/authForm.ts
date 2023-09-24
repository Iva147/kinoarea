import { AuthFormEnum, AuthFormTypes } from '../actionsTypes/authForm'

export interface SetAuthForm {
  type: AuthFormEnum.ADD_AUTH_FORM
  payload: AuthFormTypes
}

export interface LoadAuthForm {
  type: AuthFormEnum.LOAD_AUTH_FORM
}
export interface ErrAuthForm {
  type: AuthFormEnum.ERR_AUTH_FORM
}

export type AuthFormActions = SetAuthForm | LoadAuthForm | ErrAuthForm
