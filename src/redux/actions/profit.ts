import { Profit } from '../actionsTypes/profit'
import { ICategory } from '../../components/ui/Category/Category'

interface ChangeCategory {
  type: Profit.CHANGE_CATEGORY
  payload: ICategory
}
export type ProfitActions = ChangeCategory
