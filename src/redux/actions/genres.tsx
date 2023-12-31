import { Genres } from '../actionsTypes/genres'
import { CustomError, IGenre } from '../../api/types'
export interface IMovieGenresAction {
  type: Genres.ADD_MOVIES_GENRES
  payload: IGenre[]
}

export interface IMovieGenresErrAction {
  type: Genres.ERR_MOVIES_GENRES
  payload: CustomError
}

export type GenreActions = IMovieGenresAction | IMovieGenresErrAction
