import * as MovieAsyncActions from './moviesAsyncActions'
import * as GenresAsyncActions from './genres'
import * as PersonsThunk from './persons'
import { MoviesActionCreators, PersonsActionCreator, ProfitActionCreators } from '../actionsCreators'
import { fetchUser, updateUser } from './user'

export default {
  ...MovieAsyncActions,
  ...GenresAsyncActions,
  ...PersonsThunk,
  changePersonActiveCategory: PersonsActionCreator.changeActiveCategory,
  ...MoviesActionCreators,
  ...ProfitActionCreators,
  fetchUser,
  updateUser,
}
