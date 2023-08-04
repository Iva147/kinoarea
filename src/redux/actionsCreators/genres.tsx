import { Genres } from '../actionsTypes/genres'
import { IMovieGenresAction, IMovieGenresErrAction } from '../actions/genres'
import { CustomError } from '../../api/types'
import { IGenre } from '../../api/types'

export const GenresActionCreators = {
  addMovieGenres: (genres: IGenre[]): IMovieGenresAction => {
    return { type: Genres.ADD_MOVIES_GENRES, payload: genres }
  },
  errMovieGenres: (err: CustomError): IMovieGenresErrAction => {
    return { type: Genres.ERR_MOVIES_GENRES, payload: err }
  },
}
