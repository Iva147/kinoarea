import { ICategory } from '../../components/ui/Category/Category'
import { Profit } from '../actionsTypes/profit'

export const ProfitActionCreators = {
  changeProfitActiveCategory: (category: ICategory) => {
    return { type: Profit.CHANGE_CATEGORY, payload: category }
  },
}
