import classnames from 'classnames'

export interface ICategory {
  title: string
  isActive?: boolean
  id: string
}
interface CategoryProps extends Omit<ICategory, 'id'> {
  className?: string
  onClick?: () => void
}
export const Category = ({ title, isActive = false, className, onClick }: CategoryProps) => {
  return (
    <li
      className={classnames(`${isActive ? 'text-white' : 'text-gray-text'} hover:text-white cursor-pointer`, [
        className,
      ])}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={-1}
      role="menuitem"
    >
      {title}
    </li>
  )
}
