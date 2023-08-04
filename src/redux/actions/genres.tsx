import { Genres } from '../actionsTypes/genres'
import { CustomError } from '../../api/types'
import { IGenre } from '../../api/types/responses'
export interface IMovieGenresAction {
  type: Genres.ADD_MOVIES_GENRES
  payload: IGenre[]
}

export interface IMovieGenresErrAction {
  type: Genres.ERR_MOVIES_GENRES
  payload: CustomError
}

export type GenreActions = IMovieGenresAction | IMovieGenresErrAction
