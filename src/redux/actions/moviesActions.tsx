import { MoviesActionTypes } from '../actionsTypes/moviesActionTypes'
import { CustomError, IMovieRes } from '../../api/types'
import { ICategory } from '../../components/ui/Category/Category'

export type NowPlayingMovie = {
  type: MoviesActionTypes.ADD_NOW_PLAYING_MOVIE
  payload: IMovieRes[]
}

export type LoadNowPlayingMovie = {
  type: MoviesActionTypes.LOAD_NOW_PLAYING_MOVIE
}

export type ErrorNowPlayingMovie = {
  type: MoviesActionTypes.ERROR_NOW_PLAYING_MOVIE
  payload: CustomError
}

export interface ChangeNowPlayingCategory {
  type: MoviesActionTypes.CHANGE_NOW_PLAYING_CATEGORY
  payload: ICategory
}

export type PopularMovie = {
  type: MoviesActionTypes.ADD_POPULAR_MOVIE
  payload: IMovieRes[]
}
export type LoadPopularMovie = {
  type: MoviesActionTypes.LOAD_POPULAR_MOVIE
}

export type ErrorPopularMovie = {
  type: MoviesActionTypes.ERROR_POPULAR_MOVIE
  payload: CustomError
}

export interface ChangePopularCategory {
  type: MoviesActionTypes.CHANGE_POPULAR_CATEGORY
  payload: ICategory
}

export type UpcomingMovie = {
  type: MoviesActionTypes.ADD_UPCOMING_MOVIE
  payload: IMovieRes[]
}

export type LoadUpcomingMovie = {
  type: MoviesActionTypes.LOAD_UPCOMING_MOVIE
}

export type ErrorUpcomingMovie = {
  type: MoviesActionTypes.ERROR_UPCOMING_MOVIE
  payload: CustomError
}

export type MovieActions =
  | NowPlayingMovie
  | PopularMovie
  | UpcomingMovie
  | LoadNowPlayingMovie
  | LoadPopularMovie
  | LoadUpcomingMovie
  | ErrorNowPlayingMovie
  | ErrorPopularMovie
  | ErrorUpcomingMovie
  | ChangeNowPlayingCategory
  | ChangePopularCategory
