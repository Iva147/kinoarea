import * as MovieAsyncActions from './moviesAsyncActions'
import * as GenresAsyncActions from './genres'
import * as PersonsThunk from './persons'
import { MoviesActionCreators, PersonsActionCreator, ProfitActionCreators } from '../actionsCreators'
import { fetchUser, updateUser, createUser, removeFetchedUser } from './user'
import { fetchUserReviews } from './userReviews'
import { fetchUserFriends } from './userFriends'

export default {
  ...MovieAsyncActions,
  ...GenresAsyncActions,
  ...PersonsThunk,
  changePersonActiveCategory: PersonsActionCreator.changeActiveCategory,
  ...MoviesActionCreators,
  ...ProfitActionCreators,
  fetchUser,
  updateUser,
  fetchUserReviews,
  fetchUserFriends,
  createUser,
  removeFetchedUser,
}
