import { IFriend } from '../../api/types/responses'
import { AddIncomingFriends, ErrIncomingFriends, LoadIncomingFriends } from '../actions/incomingFriends'
import { IncomingFriends } from '../actionsTypes/incomingFriends'

export const IncomingFriendsActionCreators = {
  add: (friends: IFriend[]): AddIncomingFriends => {
    return { type: IncomingFriends.ADD_INCOMING_FRIENDS, payload: friends }
  },
  load: (): LoadIncomingFriends => {
    return { type: IncomingFriends.LOAD_INCOMING_FRIENDS }
  },
  err: (err: string): ErrIncomingFriends => {
    return { type: IncomingFriends.ERR_INCOMING_FRIENDS, payload: err }
  },
}
