import * as MovieAsyncActions from './moviesAsyncActions'
import * as GenresAsyncActions from './genres'
import * as PersonsThunk from './persons'
import { MoviesActionCreators, PersonsActionCreator, ProfitActionCreators } from '../actionsCreators'
import { fetchUser, updateUser, createUser, removeFetchedUser, getLoggedUser } from './user'
import { fetchUserReviews, setUserReview } from './userReviews'
import { fetchUserFriends, addUserFriend, removeUserFriend } from './userFriends'
import { fetchIncomingFriends, removeIncomingFriend } from './incomingFriends'

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
  setUserReview,
  fetchUserFriends,
  createUser,
  removeFetchedUser,
  getLoggedUser,
  addUserFriend,
  removeUserFriend,
  removeIncomingFriend,
  fetchIncomingFriends,
}
