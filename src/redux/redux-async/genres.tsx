import { type Dispatch } from 'redux'
import { GenreActions } from '../actions/genres'
import { GenresActionCreators } from '../actionsCreators/genres'
import { getGenres } from '../../api/movieDBApi'

export const fetchMovieGenres = () => {
  return async (dispatch: Dispatch<GenreActions>) => {
    try {
      const data = await getGenres('movie')
      dispatch(GenresActionCreators.addMovieGenres(data))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(GenresActionCreators.errMovieGenres(message))
    }
  }
}
