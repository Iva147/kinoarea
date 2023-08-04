import { GenreActions } from '../actions/genres'
import { Genres } from '../actionsTypes/genres'
import { CustomError, IGenre } from '../../api/types'

interface IGenresState {
  error: CustomError
  movies: IGenre[]
}
const initialState: IGenresState = {
  error: null,
  movies: [],
}
export const genresReducer = (state: IGenresState = initialState, action: GenreActions): IGenresState => {
  switch (action.type) {
    case Genres.ADD_MOVIES_GENRES:
      return { ...state, movies: action.payload }
    case Genres.ERR_MOVIES_GENRES:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
