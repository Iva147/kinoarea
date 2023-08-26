import { CategoriesTypes } from '../../mock/categories'
import { IParams } from './requests'

export interface ICategories {
  id: string
  title: string
  amount: number
  types: CategoriesTypes
  params: Partial<IParams>
}
