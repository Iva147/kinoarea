import { type Dispatch } from 'redux'
import { UserActions } from '../actions/user'
import { UserActionCreators } from '../actionsCreators/user'
import { FirebaseApi } from '../../api/firebase'
import { IUser } from '../../api/types/responses'

export const fetchUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(UserActionCreators.load())
      const user = await FirebaseApi.getUser('u1')
      if (!user) throw { message: 'Such user not found' }

      dispatch(UserActionCreators.add(user))
    } catch (err) {
      if (err instanceof Error) dispatch(UserActionCreators.error(err.message))
    }
  }
}

export const updateUser = (id: string, data: Partial<IUser>) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(UserActionCreators.load())
      await FirebaseApi.refreshUser(id, data)
      const user = await FirebaseApi.getUser(id)
      if (!user) throw { message: 'Your account not found' }

      dispatch(UserActionCreators.add(user))
    } catch (err) {
      if (err instanceof Error) dispatch(UserActionCreators.error(err.message))
    }
  }
}
