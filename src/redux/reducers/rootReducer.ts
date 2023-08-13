import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { genresReducer } from './genresReducer'
import { personsReducer } from './personsReducer'
import { profitReducer } from './profitReducer'
import { userReducer } from './userReducer'
import { userReviewsReduser } from './userReviews'
import { userFriendsReducer } from './userFriendsReducer'
export const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  persons: personsReducer,
  profit: profitReducer,
  user: userReducer,
  userReviews: userReviewsReduser,
  userFriends: userFriendsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
