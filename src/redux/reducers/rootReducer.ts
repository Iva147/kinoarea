import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { genresReducer } from './genresReducer'
import { personsReducer } from './personsReducer'
import { profitReducer } from './profitReducer'
export const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  persons: personsReducer,
  profit: profitReducer,
})

export type RootState = ReturnType<typeof rootReducer>
