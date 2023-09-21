import { type Dispatch } from 'redux'
import { UserActions } from '../actions/user'
import { UserActionCreators } from '../actionsCreators/user'
import { FirebaseApi } from '../../api/firebase'
import { IUser } from '../../api/types/responses'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../api/firebase/base'

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

export const updateUser = (id: string, data: Partial<IUser>, img?: Blob | null) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(UserActionCreators.load())
      let body = data
      if (img) {
        const uploadedUrl = await FirebaseApi.uploadProfileImg(id, img)
        body = { ...data, img: uploadedUrl }
      }
      await FirebaseApi.refreshUser(id, body)
      const user = await FirebaseApi.getUser(id)
      if (!user) throw { message: 'Your account not found' }

      dispatch(UserActionCreators.add(user))
    } catch (err) {
      if (err instanceof Error) dispatch(UserActionCreators.error(err.message))
    }
  }
}

export const addUser = (userData: Pick<IUser, 'name' | 'surname'> & { login: string; password: string }) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(UserActionCreators.load())
      createUserWithEmailAndPassword(auth, userData.login, userData.password)
        .then(userCredential => {
          const user = userCredential.user

          console.log('user 1', user)

          /* {
            name: userData.name,
              surname: userData.surname,
            birthday: null,
            sex: 'notchosen',
            img: '',
            country: '',
            city: '',
            genres: [],
            about: '',
            links: {
            youtube: '',
              linkedin: '',
              facebook: '',
              instagram: '',
              twitter: '',
          },
            friends: [],
              reviews: [],
          }*/

          FirebaseApi.addUser({
            name: userData.name,
            surname: userData.surname,
          })
            .then(user => {
              console.log('added User', user)
              user && dispatch(UserActionCreators.add(user))
            })
            .catch(error => {
              throw error
            })
          console.log('user', user)
        })
        .catch(error => {
          throw error
        })
    } catch (err) {
      console.log('error', err)
      if (err instanceof Error) dispatch(UserActionCreators.error(err.message))
    }
  }
}

export const removeFetchedUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(UserActionCreators.load())
      await signOut(auth)
      dispatch(UserActionCreators.remove())
    } catch (err) {
      if (err instanceof Error) dispatch(UserActionCreators.error(err.message))
    }
  }
}
