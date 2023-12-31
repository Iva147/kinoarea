import { type Dispatch } from 'redux'
import { PersonsActions } from '../actions/persons'
import { getPersons } from '../../api/movieDBApi'
import { PersonsActionCreator } from '../actionsCreators'

export const fetchPopularPersons = (id?: string | number) => {
  return async (dispatch: Dispatch<PersonsActions>) => {
    try {
      dispatch(PersonsActionCreator.loadPopular())
      const data = await getPersons({ page: id || 1 })
      dispatch(PersonsActionCreator.addPopular(data.results))
    } catch (err) {
      let message = 'Smth went wrong'
      if (err instanceof Error) message = err.message
      dispatch(PersonsActionCreator.errPopular(message))
    }
  }
}
