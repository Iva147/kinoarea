import { NotificationEnum } from '../actionsTypes/notification'

export interface SetNotification {
  type: NotificationEnum.SET_MESSAGE
  payload: string
}

export interface ClearNotification {
  type: NotificationEnum.CLEAR_MESSAGE
}

export type NotificationActions = SetNotification | ClearNotification
