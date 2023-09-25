import { NotificationEnum } from '../actionsTypes/notification'
import { ClearNotification, SetNotification } from '../actions/notification'

export const NotificationCreators = {
  setNotification: (message: string): SetNotification => {
    return { type: NotificationEnum.SET_MESSAGE, payload: message }
  },

  clearNotification: (): ClearNotification => {
    return { type: NotificationEnum.CLEAR_MESSAGE }
  },
}
