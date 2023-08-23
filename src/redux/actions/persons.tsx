import { Persons } from '../actionsTypes/persons'
import { CustomError, IPerson } from '../../api/types'
import { ICategory } from '../../components/ui/Category/Category'

export interface AddPopularPersons {
  type: Persons.ADD_POPULAR
  payload: IPerson[]
}

export interface LoadPopularPersons {
  type: Persons.LOAD_POPULAR
}

export interface ErrorPopularPersons {
  type: Persons.ERROR_POPULAR
  payload: CustomError
}

export interface ChangeActiveCategory {
  type: Persons.CHANGE_ACTIVE_CATEGORY
  payload: ICategory
}

export type PersonsActions = AddPopularPersons | LoadPopularPersons | ErrorPopularPersons | ChangeActiveCategory
