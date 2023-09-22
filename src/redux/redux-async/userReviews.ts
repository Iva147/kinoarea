import { UserReviewActions } from '../actions/userReviews'
import type { Dispatch } from 'redux'
import { UserReviewsActionCreators } from '../actionsCreators/userReviews'
import { FirebaseApi } from '../../api/firebase'
import { IUserReview } from '../../api/types/responses'

export const fetchUserReviews = (userId: string) => {
  return async (dispatch: Dispatch<UserReviewActions>) => {
    try {
      dispatch(UserReviewsActionCreators.load())
      const reviews = await FirebaseApi.getUserReviews(userId)
      dispatch(UserReviewsActionCreators.add(reviews))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(UserReviewsActionCreators.err(message))
    }
  }
}

export const setUserReview = (review: Omit<IUserReview, 'id'>) => {
  return async (dispatch: Dispatch<UserReviewActions>) => {
    try {
      dispatch(UserReviewsActionCreators.load())
      await FirebaseApi.setUserReview(review)
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(UserReviewsActionCreators.err(message))
    }
  }
}
