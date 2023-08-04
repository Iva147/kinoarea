import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import { IncomeList } from '../../../../components/ui/IncomeList/IncomeList'
import { income } from '../../../../mock/income'
import { profit } from '../../../../mock/categories'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { setActiveItem } from '../../../../utils/setActiveItem'
import { useActions } from '../../../../hooks/useActions'
import { ICategory } from '../../../../components/ui/Category/Category'

export const Profit = () => {
  const { activeCategory } = useTypedSelector(state => state.profit)
  const { changeProfitActiveCategory } = useActions()

  const onCategoryChange = (item: ICategory) => {
    changeProfitActiveCategory(item)
  }
  return (
    <section className={'container'}>
      <SectionHeader
        title={'Кассовые сборы'}
        categories={setActiveItem(profit, activeCategory.id)}
        onCategoryClick={onCategoryChange}
      />
      {/* TODO: add period */}
      <IncomeList list={income} />
    </section>
  )
}
