import { Link as Anchor } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/general/arrow-right.svg'

interface LinkProps {
  className?: string
  path: string
  title: string
  onClick?: () => void
}
export const Link = ({ path, title, className, onClick }: LinkProps) => {
  return (
    <Anchor to={path} onClick={onClick} className={`flex gap-2 items-baseline 2xl:text-1.375rem ${className}`}>
      <span>{title}</span>
      <ArrowRightIcon className={'fill-current'} />
    </Anchor>
  )
}
