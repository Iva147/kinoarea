import { Profit } from '../actionsTypes/profit'
import { ICategory } from '../../components/ui/Category/Category'
import { profit } from '../../mock/categories'
import { ProfitActions } from '../actions/profit'

interface IProfitState {
  activeCategory: ICategory
}

const initialState: IProfitState = {
  activeCategory: profit[0],
}
export const profitReducer = (state: IProfitState = initialState, action: ProfitActions): IProfitState => {
  switch (action.type) {
    case Profit.CHANGE_CATEGORY:
      return { ...state, activeCategory: action.payload }
    default:
      return state
  }
}
