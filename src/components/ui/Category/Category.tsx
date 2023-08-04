import classnames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ICategory<T = any> {
  title: string
  isActive?: boolean
  id: string | number
  param?: T
}
interface CategoryProps extends Omit<ICategory, 'id' | 'param'> {
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
