import { UserReviewActions } from '../actions/userReviews'
import type { Dispatch } from 'redux'
import { UserReviewsActionCreators } from '../actionsCreators/userReviews'
import { FirebaseApi } from '../../api/firebase'

export const fetchUserReviews = () => {
  return async (dispatch: Dispatch<UserReviewActions>) => {
    try {
      dispatch(UserReviewsActionCreators.load())
      const reviews = await FirebaseApi.getUserReviews()

      dispatch(UserReviewsActionCreators.add(reviews))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(UserReviewsActionCreators.err(message))
    }
  }
}
