import { MoviesActionTypes } from '../actionsTypes/moviesActionTypes'
import * as MovieActions from '../actions/moviesActions'
import { ICategory } from '../../components/ui/Category/Category'
import { IMovieRes } from '../../api/types'

export const MoviesActionCreators = {
  addNowPlayingMovies: (movies: IMovieRes[]): MovieActions.NowPlayingMovie => {
    return { type: MoviesActionTypes.ADD_NOW_PLAYING_MOVIE, payload: movies }
  },
  loadNowPlayingMovies: (): MovieActions.LoadNowPlayingMovie => {
    return { type: MoviesActionTypes.LOAD_NOW_PLAYING_MOVIE }
  },
  errorNowPlayingMovies: (err: null | string): MovieActions.ErrorNowPlayingMovie => {
    return { type: MoviesActionTypes.ERROR_NOW_PLAYING_MOVIE, payload: err }
  },
  changeNowPlayingCategory: (category: ICategory): MovieActions.ChangeNowPlayingCategory => {
    return { type: MoviesActionTypes.CHANGE_NOW_PLAYING_CATEGORY, payload: category }
  },
  addPopularMovies: (movies: IMovieRes[]): MovieActions.PopularMovie => {
    return { type: MoviesActionTypes.ADD_POPULAR_MOVIE, payload: movies }
  },
  loadPopularMovies: (): MovieActions.LoadPopularMovie => {
    return { type: MoviesActionTypes.LOAD_POPULAR_MOVIE }
  },
  errorPopularMovies: (err: null | string): MovieActions.ErrorPopularMovie => {
    return { type: MoviesActionTypes.ERROR_POPULAR_MOVIE, payload: err }
  },
  changePopularCategory: (category: ICategory): MovieActions.ChangePopularCategory => {
    return { type: MoviesActionTypes.CHANGE_POPULAR_CATEGORY, payload: category }
  },
  addUpcomingMovies: (movies: IMovieRes[]): MovieActions.UpcomingMovie => {
    return { type: MoviesActionTypes.ADD_UPCOMING_MOVIE, payload: movies }
  },
  loadUpcomingMovies: (): MovieActions.LoadUpcomingMovie => {
    return { type: MoviesActionTypes.LOAD_UPCOMING_MOVIE }
  },
  errorUpcomingMovies: (err: null | string): MovieActions.ErrorUpcomingMovie => {
    return { type: MoviesActionTypes.ERROR_UPCOMING_MOVIE, payload: err }
  },
}
