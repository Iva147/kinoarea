import { Persons } from '../actionsTypes/persons'
import { CustomError, IPerson } from '../../api/types'
import { AddPopularPersons, ChangeActiveCategory, ErrorPopularPersons, LoadPopularPersons } from '../actions/persons'
import { ICategory } from '../../components/ui/Category/Category'

export const PersonsActionCreator = {
  addPopular: (persons: IPerson[]): AddPopularPersons => {
    return { type: Persons.ADD_POPULAR, payload: persons }
  },
  loadPopular: (): LoadPopularPersons => {
    return { type: Persons.LOAD_POPULAR }
  },
  errPopular: (err: CustomError): ErrorPopularPersons => {
    return { type: Persons.ERROR_POPULAR, payload: err }
  },
  changeActiveCategory: (category: ICategory): ChangeActiveCategory => {
    return { type: Persons.CHANGE_ACTIVE_CATEGORY, payload: category }
  },
}
