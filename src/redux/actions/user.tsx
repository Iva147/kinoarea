import { IUser } from '../../api/types/responses'
import { User } from '../actionsTypes/user'

export interface AddUser {
  type: User.ADD_USER
  payload: IUser
}

export interface LoadUser {
  type: User.LOAD_USER
}

export interface ErrorUser {
  type: User.ERROR_USER
  payload: string
}

export interface RemoveUser {
  type: User.REMOVE_USER
}

export type UserActions = AddUser | LoadUser | ErrorUser | RemoveUser
