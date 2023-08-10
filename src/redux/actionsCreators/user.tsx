import type { IUser } from '../../api/types/responses'
import type { AddUser, ErrorUser, LoadUser, RemoveUser } from '../actions/user'
import { User } from '../actionsTypes/user'

export const UserActionCreators = {
  add: (user: IUser): AddUser => {
    return { type: User.ADD_USER, payload: user }
  },
  load: (): LoadUser => {
    return { type: User.LOAD_USER }
  },
  error: (error: string): ErrorUser => {
    return { type: User.ERROR_USER, payload: error }
  },
  remove: (): RemoveUser => {
    return { type: User.REMOVE_USER }
  },
}
