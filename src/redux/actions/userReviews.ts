import { UserReviews } from '../actionsTypes/userReviews'
import { CustomError, IUserReview } from '../../api/types/responses'

export interface AddUserReviews {
  type: UserReviews.ADD_REVIEWS
  payload: IUserReview[]
}

export interface LoadUserReviews {
  type: UserReviews.LOAD_REVIEWS
}

export interface ErrUserReviews {
  type: UserReviews.ERR_REVIEWS
  payload: CustomError
}

export type UserReviewActions = AddUserReviews | LoadUserReviews | ErrUserReviews
