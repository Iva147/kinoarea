import { IFriend } from '../../api/types/responses'
import { AddUserFriends, ErrUserFriends, LoadUserFriends } from '../actions/userFriends'
import { UserFriends } from '../actionsTypes/userFriends'

export const UserFriendsActionCreators = {
  add: (friends: IFriend[]): AddUserFriends => {
    return { type: UserFriends.ADD_FRIENDS, payload: friends }
  },
  load: (): LoadUserFriends => {
    return { type: UserFriends.LOAD_FRIENDS }
  },
  err: (err: string): ErrUserFriends => {
    return { type: UserFriends.ERR_FRIENDS, payload: err }
  },
}
