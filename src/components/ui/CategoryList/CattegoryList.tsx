import { Category, ICategory } from '../Category/Category'
import classnames from 'classnames'
interface CategoryListProps {
  list?: ICategory[]
  onItemClick?: () => void
  className?: string
}
export function CategoryList({ list, onItemClick, className }: CategoryListProps) {
  return (
    <ul className={classnames('flex items-center  flex-wrap gap-2.5 text-base font-bold 2xl:text-lg', [className])}>
      {list?.map(i => <Category title={i.title} onClick={onItemClick} key={i.id} />)}
    </ul>
  )
}
