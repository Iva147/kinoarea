import { CustomError, IFriend } from '../../api/types/responses'
import { IncomingFriends } from '../actionsTypes/incomingFriends'

export interface AddIncomingFriends {
  type: IncomingFriends.ADD_INCOMING_FRIENDS
  payload: IFriend[]
}

export interface LoadIncomingFriends {
  type: IncomingFriends.LOAD_INCOMING_FRIENDS
}

export interface ErrIncomingFriends {
  type: IncomingFriends.ERR_INCOMING_FRIENDS
  payload: CustomError
}

export type IncomingFriendsActions = AddIncomingFriends | LoadIncomingFriends | ErrIncomingFriends
