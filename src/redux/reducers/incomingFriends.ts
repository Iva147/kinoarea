import { IFriend } from '../../api/types/responses'
import { IncomingFriends } from '../actionsTypes/incomingFriends'
import { IncomingFriendsActions } from '../actions/incomingFriends'

interface IInitialState {
  friends: IFriend[]
  loading: boolean
  error: string | null
}

const initialState: IInitialState = {
  friends: [],
  loading: false,
  error: null,
}
export const incomingFriendsReducer = (state = initialState, action: IncomingFriendsActions): IInitialState => {
  switch (action.type) {
    case IncomingFriends.ADD_INCOMING_FRIENDS:
      return { ...state, friends: action.payload, loading: false, error: null }
    case IncomingFriends.LOAD_INCOMING_FRIENDS:
      return { ...state, loading: false }
    case IncomingFriends.ERR_INCOMING_FRIENDS:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
