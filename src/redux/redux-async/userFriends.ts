import type { Dispatch } from 'redux'
import { FirebaseApi } from '../../api/firebase'
import { UserFriendsActionCreators } from '../actionsCreators/userFriends'
import { UserFriendsActions } from '../actions/userFriends'

export const fetchUserFriends = (friendsIds: string[]) => {
  return async (dispatch: Dispatch<UserFriendsActions>) => {
    try {
      dispatch(UserFriendsActionCreators.load())
      const friends = await FirebaseApi.getUserFriends(friendsIds)

      dispatch(UserFriendsActionCreators.add(friends))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(UserFriendsActionCreators.err(message))
    }
  }
}
