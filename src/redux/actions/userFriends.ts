import { CustomError, IFriend } from '../../api/types/responses'
import { UserFriends } from '../actionsTypes/userFriends'

export interface AddUserFriends {
  type: UserFriends.ADD_FRIENDS
  payload: IFriend[]
}

export interface LoadUserFriends {
  type: UserFriends.LOAD_FRIENDS
}

export interface ErrUserFriends {
  type: UserFriends.ERR_FRIENDS
  payload: CustomError
}

export type UserFriendsActions = AddUserFriends | LoadUserFriends | ErrUserFriends
