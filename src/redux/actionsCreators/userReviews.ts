import { IUserReview } from '../../api/types/responses'
import { AddUserReviews, ErrUserReviews, LoadUserReviews } from '../actions/userReviews'
import { UserReviews } from '../actionsTypes/userReviews'

export const UserReviewsActionCreators = {
  add: (reviews: IUserReview[]): AddUserReviews => {
    return { type: UserReviews.ADD_REVIEWS, payload: reviews }
  },
  load: (): LoadUserReviews => {
    return { type: UserReviews.LOAD_REVIEWS }
  },
  err: (err: string): ErrUserReviews => {
    return { type: UserReviews.ERR_REVIEWS, payload: err }
  },
}
