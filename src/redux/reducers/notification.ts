import { NotificationActions } from '../actions/notification'
import { NotificationEnum } from '../actionsTypes/notification'

interface InitialState {
  message: string | null
}

const initialState: InitialState = {
  message: null,
}
export const NotificationReducer = (state = initialState, action: NotificationActions) => {
  switch (action.type) {
    case NotificationEnum.SET_MESSAGE:
      return { ...state, message: action.payload }
    case NotificationEnum.CLEAR_MESSAGE:
      return { ...state, message: null }
    default:
      return state
  }
}
