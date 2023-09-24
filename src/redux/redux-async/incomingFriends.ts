import type { Dispatch } from 'redux'
import { FirebaseApi } from '../../api/firebase'
import { IncomingFriendsActionCreators } from '../actionsCreators/incomingFriends'
import { IncomingFriendsActions } from '../actions/incomingFriends'

export const fetchIncomingFriends = (friendsIds: string[]) => {
  return async (dispatch: Dispatch<IncomingFriendsActions>) => {
    try {
      dispatch(IncomingFriendsActionCreators.load())
      const friends = await FirebaseApi.getUserFriends(friendsIds)

      dispatch(IncomingFriendsActionCreators.add(friends))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(IncomingFriendsActionCreators.err(message))
    }
  }
}

export const removeIncomingFriend = (userId: string, friendsId: string) => {
  return async (dispatch: Dispatch<IncomingFriendsActions>) => {
    try {
      dispatch(IncomingFriendsActionCreators.load())
      await FirebaseApi.removeIncomingFriend(userId, friendsId)
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(IncomingFriendsActionCreators.err(message))
    }
  }
}
